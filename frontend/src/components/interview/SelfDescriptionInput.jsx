import { UserRound } from "lucide-react";

const SelfDescriptionInput = ({
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
          bg-violet-100
          dark:bg-violet-500/10
          flex
          items-center
          justify-center
          "
        >

          <UserRound
            size={18}
            className="
            text-violet-600
            dark:text-violet-400
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
            Self Description
          </h3>

          <p
            className="
            text-xs
            text-slate-500
            dark:text-slate-400
            "
          >
            Skills, projects and experience
          </p>

        </div>

      </div>

      {/* Textarea */}

      <textarea
        rows={2}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Example: Full-stack developer experienced in React, Node.js, MongoDB and REST APIs..."
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
        focus:ring-violet-100
        dark:focus:ring-violet-500/20
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
          Highlight your strongest skills
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

export default SelfDescriptionInput;