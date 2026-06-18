const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const puppeteer = require("puppeteer")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

/**
 * Gemini's structured-output endpoint does not support every JSON Schema
 * keyword. In particular "additionalProperties" and "$schema" — both of
 * which Zod's schema converters add by default to every object, including
 * nested ones — are either rejected or silently ignored on nested objects.
 * That's why simple scalar fields (matchScore, title) were coming back
 * fine while nested array-of-object fields (technicalQuestions,
 * behavioralQuestions, skillGaps, preparationPlan) were effectively
 * unconstrained and the model was free to return them empty.
 *
 * This strips those keys recursively before the schema is sent to Gemini.
 */
function sanitizeSchemaForGemini(schema) {
    if (Array.isArray(schema)) {
        return schema.map(sanitizeSchemaForGemini)
    }
    if (schema && typeof schema === "object") {
        const clean = {}
        for (const [ key, value ] of Object.entries(schema)) {
            if (key === "additionalProperties" || key === "$schema") continue
            clean[ key ] = sanitizeSchemaForGemini(value)
        }
        return clean
    }
    return schema
}

/**
 * Converts a Zod schema into a Gemini-compatible JSON schema.
 * Requires Zod v4 (z.toJSONSchema is built in). If you're on Zod v3, install
 * "zod-to-json-schema" and replace the body with
 * `sanitizeSchemaForGemini(zodToJsonSchema(zodSchema))` instead — but note
 * that package is unmaintained and known to silently produce incomplete
 * schemas when mixed with Zod v4, which is very likely what was happening
 * before this fix.
 */
function zodToGeminiSchema(zodSchema) {
    return sanitizeSchemaForGemini(z.toJSONSchema(zodSchema))
}

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job description"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question that can be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("5 to 8 technical questions that can be asked in the interview, along with their intention and how to answer them. This array must always be populated."),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question that can be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("4 to 6 behavioral questions that can be asked in the interview, along with their intention and how to answer them. This array must always be populated."),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile, along with their severity. If the candidate is an excellent match with no notable gaps, still return at least one minor/low-severity gap rather than an empty array."),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan (at least 5 to 7 days) for the candidate to follow in order to prepare for the interview effectively. This array must always be populated."),
    title: z.string().describe("The title of the job for which the interview report is generated"),
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `You are an expert technical interview coach. Generate a complete interview report for a candidate with the following details:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Fill out every field of the response schema in full. Do not leave technicalQuestions, behavioralQuestions, skillGaps, or preparationPlan empty — these are the most important parts of the report and must each contain multiple, specific, non-generic items tailored to this resume and this job description.`

    let response
    try {
        response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: zodToGeminiSchema(interviewReportSchema),
                // Structured extraction doesn't need "thinking" tokens, and
                // burning the token budget on reasoning before producing the
                // JSON is a common cause of truncated/incomplete output.
                thinkingConfig: { thinkingBudget: 0 },
                maxOutputTokens: 8192,
            }
        })
    } catch (err) {
        throw new Error(`Gemini call failed while generating the interview report: ${err.message}`)
    }

    let parsed
    try {
        parsed = JSON.parse(response.text)
    } catch (err) {
        throw new Error(`Gemini returned non-JSON or truncated output: ${err.message}\n${response.text}`)
    }

    // Validate against the schema instead of trusting the model blindly —
    // if a field is missing/malformed this throws a clear, specific error
    // (e.g. "technicalQuestions: Required") instead of silently saving an
    // empty array to the database.
    const validation = interviewReportSchema.safeParse(parsed)
    if (!validation.success) {
        throw new Error(`Gemini's response did not match the expected schema: ${JSON.stringify(validation.error.issues)}`)
    }

    return validation.data
}

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

    const resumePdfSchema = z.object({
        html: z.string().describe("The HTML content of the resume which can be converted to PDF using any library like puppeteer")
    })

    const prompt = `Generate a resume for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}

                        Respond with a JSON object with a single field "html" which contains the HTML content of the resume.
                        The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
                        The content of the resume should not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                        You can highlight content using some colors or different font styles but the overall design should be simple and professional.
                        The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
                        The resume should not be too lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.
                    `

    let response
    try {
        response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: zodToGeminiSchema(resumePdfSchema),
                thinkingConfig: { thinkingBudget: 0 },
                maxOutputTokens: 8192,
            }
        })
    } catch (err) {
        throw new Error(`Gemini call failed while generating the resume HTML: ${err.message}`)
    }

    let jsonContent
    try {
        jsonContent = JSON.parse(response.text)
    } catch (err) {
        throw new Error(`Gemini returned non-JSON or truncated output: ${err.message}\n${response.text}`)
    }

    const validation = resumePdfSchema.safeParse(jsonContent)
    if (!validation.success) {
        throw new Error(`Gemini's response did not match the expected schema: ${JSON.stringify(validation.error.issues)}`)
    }

    const pdfBuffer = await generatePdfFromHtml(validation.data.html)

    return pdfBuffer
}

module.exports = { generateInterviewReport, generateResumePdf }