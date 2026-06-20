import { useEffect, useState } from "react";
import {
  getInterviewReportById,
} from "../api/interviewApi";

const useReport = (
  interviewId
) => {

  const [
    report,
    setReport,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {

    if (!interviewId) return;

    const fetchReport =
      async () => {

        try {

          setLoading(true);

          setError("");

          const response =
            await getInterviewReportById(
              interviewId
            );

          setReport(
            response.interviewReport
          );

        } catch (err) {

          console.error(err);

          setError(
            err?.response?.data?.message ||
            "Failed to fetch report"
          );

        } finally {

          setLoading(false);

        }

      };

    fetchReport();

  }, [interviewId]);

  return {
    report,
    loading,
    error,
  };

};

export default useReport;