import {
  Download,
  Loader2,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  downloadResumePdf,
} from "../../api/interviewApi";

const DownloadResumeButton = ({
  interviewReportId,
}) => {

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleDownload =
    async () => {

      try {

        setLoading(true);

        toast.loading(
          "Preparing Resume...",
          {
            id: "resume-download",
          }
        );

        const pdfBlob =
          await downloadResumePdf(
            interviewReportId
          );

        const blob =
          new Blob(
            [pdfBlob],
            {
              type:
                "application/pdf",
            }
          );

        const url =
          window.URL.createObjectURL(
            blob
          );

        const link =
          document.createElement(
            "a"
          );

        link.href = url;

        link.download =
          "AI_Optimized_Resume.pdf";

        document.body.appendChild(
          link
        );

        link.click();

        link.remove();

        window.URL.revokeObjectURL(
          url
        );

        toast.success(
          "Resume Downloaded",
          {
            id: "resume-download",
          }
        );

      } catch (error) {

        console.error(
          "Resume Download Error:",
          error
        );

        toast.error(
          error?.response?.data?.message ||
          "Failed to download resume",
          {
            id: "resume-download",
          }
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <button
      onClick={handleDownload}
      disabled={loading}
      className="
      w-full
      h-14
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-violet-600
      text-white
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-xl
      disabled:opacity-70
      "
    >

      {loading ? (
        <>
          <Loader2
            size={20}
            className="
            animate-spin
            "
          />
          Downloading...
        </>
      ) : (
        <>
          <Download size={20} />
          Download Resume
        </>
      )}

    </button>

  );

};

export default DownloadResumeButton;