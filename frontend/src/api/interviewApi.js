import axios from "axios";

export const interviewApi = axios.create({
  baseURL:  `${import.meta.env.VITE_API_URL}/interview`,
  withCredentials: true,
});

/**
 * Generate Interview Report
 */
export const generateInterviewReport =
  async (formData) => {

    const response =
      await interviewApi.post(
        "/",
        formData
      );

    return response.data;
};

/**
 * Get Interview Report By Id
 */
export const getInterviewReportById =
  async (interviewId) => {

    const response =
      await interviewApi.get(
        `/report/${interviewId}`
      );

    return response.data;
};

/**
 * Download AI Resume PDF
 */
export const downloadResumePdf =
  async (interviewReportId) => {

    const response =
      await interviewApi.post(
        `/resume/pdf/${interviewReportId}`,
        {},
        {
          responseType: "blob",
        }
      );

    return response.data;
};

export const getAllReports =
  async () => {

    const response =
      await interviewApi.get("/");

    return response.data;
};