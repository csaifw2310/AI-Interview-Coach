import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import {
  getAllReports,
} from "../api/interviewApi";

const Reports = () => {

  const navigate =
    useNavigate();

  const [
    reports,
    setReports,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    const fetchReports =
      async () => {

        try {

          const data =
            await getAllReports();

          console.log(
            "Reports:",
            data
          );

          setReports(
            data.interviewReports || []
          );

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);

        }

      };

    fetchReports();

  }, []);

  if (loading) {

    return (

      <MainLayout>

        <div
          className="
          flex
          items-center
          justify-center
          h-[60vh]
          "
        >
          Loading Reports...
        </div>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        "
      >

        <div>

          <h1
            className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Interview Reports
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            dark:text-slate-400
            "
          >
            Access all previously generated reports.
          </p>

        </div>

      </div>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {reports.length === 0 ? (

          <div
            className="
            col-span-full
            bg-white
            dark:bg-slate-900
            border
            border-slate-200
            dark:border-slate-800
            rounded-3xl
            p-12
            text-center
            "
          >

            <h3
              className="
              text-2xl
              font-semibold
              mb-3
              "
            >
              No Reports Yet
            </h3>

            <p
              className="
              text-slate-500
              dark:text-slate-400
              "
            >
              Generate your first interview report.
            </p>

          </div>

        ) : (

          reports.map(
            (report) => (

              <div
                key={report._id}
                onClick={() =>
                  navigate(
                    `/report/${report._id}`
                  )
                }
                className="
                cursor-pointer
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-800
                rounded-3xl
                p-6
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  flex
                  justify-between
                  items-start
                  mb-4
                  "
                >

                  <h3
                    className="
                    text-lg
                    font-semibold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {report.title}
                  </h3>

                  <span
                    className="
                    text-green-500
                    font-bold
                    "
                  >
                    {report.matchScore}%
                  </span>

                </div>

                <p
                  className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  Click to view detailed report
                </p>

              </div>

            )
          )

        )}

      </div>

    </MainLayout>

  );

};

export default Reports;