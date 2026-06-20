import { Briefcase } from "lucide-react";

const JobDescriptionInput = ({
  value,
  onChange,
}) => {

  const characterCount =
    value.length;

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
          bg-blue-100
          dark:bg-blue-500/10
          flex
          items-center
          justify-center
          "
        >

          <Briefcase
            size={18}
            className="
            text-blue-600
            dark:text-blue-400
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
            Job Description
          </h3>

          <p
            className="
            text-xs
            text-slate-500
            dark:text-slate-400
            "
          >
            Paste the target role description
          </p>

        </div>

      </div>

      {/* Textarea */}

      <textarea
        rows={4}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Paste the job description here..."
        className="
        w-full
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        text-slate-900
        dark:text-white
        placeholder:text-slate-400
        dark:placeholder:text-slate-500
        p-4
        resize-none
        outline-none
        transition-all
        duration-300
        focus:ring-4
        focus:ring-blue-100
        dark:focus:ring-blue-500/20
        "
      />

      {/* Footer */}

      <div
        className="
        flex
        justify-between
        items-center
        mt-2
        "
      >

        <span
          className="
          text-xs
          text-slate-500
          dark:text-slate-400
          "
        >
          Recommended: 100+ words
        </span>

        <span
          className="
          text-xs
          font-medium
          text-slate-500
          dark:text-slate-400
          "
        >
          {characterCount} chars
        </span>

      </div>

    </div>

  );

};

export default JobDescriptionInput;