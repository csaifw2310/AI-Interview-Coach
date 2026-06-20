import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  generateInterviewReport,
} from "../../api/interviewApi";

import JobDescriptionInput from "./JobDescriptionInput";
import ResumeUploader from "./ResumeUploader";
import SelfDescriptionInput from "./SelfDescriptionInput";
import GenerateButton from "./GenerateButton";
import ErrorBanner from "../common/ErrorBanner";

const InterviewForm = () => {

  const navigate = useNavigate();

  const [
    jobDescription,
    setJobDescription,
  ] = useState("");

  const [
    selfDescription,
    setSelfDescription,
  ] = useState("");

  const [
    resume,
    setResume,
  ] = useState(null);

  const [
    loading,
    setLoading,
    ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
    ] = useState("");


  const handleSubmit = async () => {

    /* Validation */

    if (!resume) {

      toast.error(
        "Please upload your resume"
      );

      return;
    }

    if (!jobDescription.trim()) {

      toast.error(
        "Job Description cannot be empty"
      );

      return;
    }

    if (!selfDescription.trim()) {

      toast.error(
        "Self Description cannot be empty"
      );

      return;
    }

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "resume",
        resume
      );

      formData.append(
        "jobDescription",
        jobDescription
      );

      formData.append(
        "selfDescription",
        selfDescription
      );

      const result =
        await generateInterviewReport(
          formData
        );

      console.log(
        "Interview Report:",
        result
      );

      if (
        !result?.interviewReport?._id
      ) {

        throw new Error(
          "Interview Report ID not found"
        );

      }

      toast.success(
        "Interview report generated successfully"
      );

      navigate(
        `/report/${result.interviewReport._id}`
      );

    } catch (error) {

  console.error(error);

  const errorCode =
    error?.response?.data?.code;

  if (
    errorCode === "AI_BUSY"
  ) {

    setErrorMessage(
      "AI service is currently experiencing high demand. Please try again in a few minutes."
    );

  } else {

    setErrorMessage(
      error?.response?.data?.message ||
      "Unable to generate interview report."
    );

  }

  toast.error(
    error?.response?.data?.message ||
    "Failed to generate report"
  );

} finally {

      setLoading(false);

    }

  };

  return (

    <div
    
      className="
      relative
      bg-white/85
      dark:bg-slate-900/85
      backdrop-blur-xl
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      shadow-[0_20px_60px_rgba(0,0,0,0.10)]
      p-5
      lg:p-6
      "
    >
        <ErrorBanner
    message={errorMessage}
  />


      {loading && (

        <div
          className="
          absolute
          inset-0
          z-50
          rounded-3xl
          bg-white/80
          dark:bg-slate-950/80
          backdrop-blur-sm
          flex
          items-center
          justify-center
          "
        >

          <div
            className="
            flex
            flex-col
            items-center
            "
          >

            <div
              className="
              w-12
              h-12
              border-4
              border-blue-500
              border-t-transparent
              rounded-full
              animate-spin
              "
            />

            <p
              className="
              mt-4
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
              "
            >
              Generating Interview Report...
            </p>

          </div>

        </div>

      )}

      <div
        className="
        grid
        lg:grid-cols-2
        gap-5
        "
      >

        <JobDescriptionInput
          value={jobDescription}
          onChange={
            setJobDescription
          }
        />

        <ResumeUploader
          file={resume}
          setFile={setResume}
        />

      </div>

      <div className="mt-4">

        <SelfDescriptionInput
          value={selfDescription}
          onChange={
            setSelfDescription
          }
        />

      </div>

      <div className="mt-4">

        <GenerateButton
          loading={loading}
          onClick={handleSubmit}
        />

      </div>

    </div>

  );

};

export default InterviewForm;