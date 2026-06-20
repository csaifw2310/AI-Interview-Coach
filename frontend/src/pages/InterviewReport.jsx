import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import MainLayout from "../layout/MainLayout";

import useReport from "../hooks/useReport";

import MatchScoreCard from "../components/report/MatchScoreCard";
import SkillGapCard from "../components/report/SkillGapCard";
import ReportSidebar from "../components/report/ReportSidebar";
import TechnicalQuestions from "../components/report/TechnicalQuestions";
import BehavioralQuestions from "../components/report/BehavioralQuestions";
import Roadmap from "../components/report/Roadmap";
import DownloadResumeButton from "../components/report/DownloadResumeButton";

const InterviewReport = () => {

  const navigate = useNavigate();

  const { interviewId } =
    useParams();

  const {
    report,
    loading,
    error,
  } = useReport(interviewId);

  const [
    activeTab,
    setActiveTab,
  ] = useState("technical");

  if (loading) {

    return (

      <MainLayout>

        <div
          className="
          flex
          items-center
          justify-center
          h-[70vh]
          "
        >

          <div
            className="
            text-center
            "
          >

            <div
              className="
              w-12
              h-12
              border-4
              border-blue-600
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              "
            />

            <p
              className="
              mt-4
              text-slate-600
              dark:text-slate-400
              "
            >
              Loading Interview Report...
            </p>

          </div>

        </div>

      </MainLayout>

    );

  }

  if (error) {

    return (

      <MainLayout>

        <div
          className="
          flex
          items-center
          justify-center
          h-[70vh]
          "
        >

          <div
            className="
            text-center
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-red-500
              "
            >
              Error
            </h2>

            <p
              className="
              mt-2
              text-slate-500
              "
            >
              {error}
            </p>

          </div>

        </div>

      </MainLayout>

    );

  }

  if (!report) {

    return (

      <MainLayout>

        <div
          className="
          flex
          items-center
          justify-center
          h-[70vh]
          "
        >

          <h2
            className="
            text-2xl
            font-semibold
            text-slate-700
            dark:text-slate-300
            "
          >
            Report Not Found
          </h2>

        </div>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      {/* Header */}

      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
        mb-8
        "
      >

        <div>

          <button
            onClick={() =>
              navigate("/")
            }
            className="
            flex
            items-center
            gap-2
            text-sm
            text-slate-500
            hover:text-blue-600
            mb-3
            transition-all
            duration-300
            "
          >

            <ArrowLeft size={16} />

            Back To Home

          </button>

          <h1
            className="
            text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            {report.title}
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            dark:text-slate-400
            "
          >
            AI Generated Interview Preparation Report
          </p>

        </div>

      </div>

      {/* Main Layout */}

      <div
        className="
        grid
        lg:grid-cols-12
        gap-6
        "
      >

        {/* Left Sidebar */}

        <div
          className="
          lg:col-span-2
          "
        >

          <div
            className="
            lg:sticky
            lg:top-6
            "
          >

            <ReportSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

          </div>

        </div>

        {/* Center Content */}

        <div
          className="
          lg:col-span-7
          "
        >

          <div
            className="
            bg-white
            dark:bg-slate-900
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            shadow-sm
            p-6
            "
          >

            {activeTab ===
              "technical" && (

              <TechnicalQuestions
                questions={
                  report.technicalQuestions
                }
              />

            )}

            {activeTab ===
              "behavioral" && (

              <BehavioralQuestions
                questions={
                  report.behavioralQuestions
                }
              />

            )}

            {activeTab ===
              "roadmap" && (

              <Roadmap
                preparationPlan={
                  report.preparationPlan
                }
              />

            )}

          </div>

        </div>

        {/* Right Panel */}

        <div
          className="
          lg:col-span-3
          "
        >

          <div
            className="
            lg:sticky
            lg:top-6
            space-y-6
            "
          >

            <MatchScoreCard
              matchScore={
                report.matchScore
              }
            />

            <SkillGapCard
              skillGaps={
                report.skillGaps
              }
            />

            <DownloadResumeButton
              interviewReportId={
                report._id
              }
            />

          </div>

        </div>

      </div>

    </MainLayout>

  );

};

export default InterviewReport;