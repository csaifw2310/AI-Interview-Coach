const express = require("express")
const interviewController = require("../controllers/interviewController")
const upload = require("../middleware/fileMiddleware")
const protect = require("../middleware/authMiddleware")

const interviewRouter = express.Router()


interviewRouter.post("/", protect, upload.single("resume"), interviewController.generateInterViewReportController)

interviewRouter.get("/report/:interviewId", protect, interviewController.getInterviewReportByIdController)

interviewRouter.get("/", protect, interviewController.getAllInterviewReportsController)

interviewRouter.post("/resume/pdf/:interviewReportId", protect, interviewController.generateResumePdfController)


module.exports = interviewRouter