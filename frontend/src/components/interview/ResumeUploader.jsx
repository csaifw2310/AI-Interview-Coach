import {
  UploadCloud,
  FileText,
  Trash2,
  RefreshCw,
} from "lucide-react";

import toast from "react-hot-toast";

const ResumeUploader = ({
  file,
  setFile,
}) => {

  const handleFileChange = (e) => {

    const selected =
      e.target.files?.[0];

    if (!selected) return;

    if (
      selected.type !==
      "application/pdf"
    ) {

      toast.error(
        "Only PDF files are allowed"
      );

      return;
    }

    setFile(selected);

    toast.success(
      "Resume uploaded successfully"
    );
  };

  const handleReplaceFile = (
    e
  ) => {

    e.preventDefault();

    document
      .getElementById(
        "resumeInput"
      )
      ?.click();
  };

  const handleRemoveFile = (
    e
  ) => {

    e.preventDefault();

    setFile(null);

    const input =
      document.getElementById(
        "resumeInput"
      );

    if (input) {
      input.value = "";
    }

    toast.success(
      "Resume removed"
    );
  };

  return (

    <div>

      {/* Header */}

      <div
        className="
        flex
        items-center
        gap-3
        mb-3
        "
      >

        <div
          className="
          w-10
          h-10
          rounded-xl
          bg-emerald-100
          dark:bg-emerald-500/10
          flex
          items-center
          justify-center
          "
        >

          <UploadCloud
            size={18}
            className="
            text-emerald-600
            dark:text-emerald-400
            "
          />

        </div>

        <div>

          <h3
            className="
            text-lg
            font-semibold
            text-slate-900
            dark:text-white
            "
          >
            Resume Upload
          </h3>

          <p
            className="
            text-xs
            text-slate-500
            dark:text-slate-400
            "
          >
            PDF format only
          </p>

        </div>

      </div>

      {/* Upload Area */}

      <label
        className="
        h-[210px]
        rounded-2xl
        border-2
        border-dashed
        border-slate-300
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        hover:border-blue-500
        hover:shadow-lg
        transition-all
        duration-300
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-4
        cursor-pointer
        "
      >

        {!file ? (

          <>

            <UploadCloud
              size={42}
              className="
              text-blue-500
              mb-3
              "
            />

            <h4
              className="
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              Upload Resume
            </h4>

            <p
              className="
              text-sm
              mt-2
              text-slate-500
              dark:text-slate-400
              "
            >
              Click to upload PDF
            </p>

          </>

        ) : (

          <>

            <div
              className="
              w-14
              h-14
              rounded-full
              bg-green-500/10
              flex
              items-center
              justify-center
              mb-3
              "
            >

              <FileText
                size={28}
                className="
                text-green-500
                "
              />

            </div>

            <h4
              className="
              text-sm
              font-medium
              break-all
              text-slate-900
              dark:text-white
              "
            >
              {file.name}
            </h4>

            <p
              className="
              mt-1
              text-xs
              text-slate-500
              dark:text-slate-400
              "
            >
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <div
              className="
              mt-2
              px-3
              py-1
              rounded-full
              bg-green-500/10
              text-green-600
              dark:text-green-400
              text-xs
              font-medium
              "
            >
              Uploaded Successfully
            </div>

            <div
              className="
              mt-3
              flex
              gap-2
              "
            >

              <button
                type="button"
                onClick={
                  handleReplaceFile
                }
                className="
                flex
                items-center
                gap-1
                px-3
                py-1.5
                rounded-lg
                bg-blue-600
                text-white
                text-xs
                hover:bg-blue-700
                transition-all
                "
              >
                <RefreshCw
                  size={12}
                />
                Replace
              </button>

              <button
                type="button"
                onClick={
                  handleRemoveFile
                }
                className="
                flex
                items-center
                gap-1
                px-3
                py-1.5
                rounded-lg
                bg-red-600
                text-white
                text-xs
                hover:bg-red-700
                transition-all
                "
              >
                <Trash2
                  size={12}
                />
                Remove
              </button>

            </div>

          </>

        )}

        <input
          id="resumeInput"
          hidden
          type="file"
          accept=".pdf"
          onChange={
            handleFileChange
          }
        />

      </label>

    </div>

  );

};

export default ResumeUploader;