import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code2,
} from "lucide-react";

const TechnicalQuestions = ({
  questions = [],
}) => {

  const [
    openIndex,
    setOpenIndex,
  ] = useState(0);

  return (

    <div>

      <div
        className="
        flex
        items-center
        gap-2
        mb-6
        "
      >

        <Code2
          size={20}
          className="
          text-blue-500
          "
        />

        <h2
          className="
          text-xl
          font-semibold
          text-slate-900
          dark:text-white
          "
        >
          Technical Questions
        </h2>

      </div>

      <div
        className="
        space-y-4
        "
      >

        {questions.map(
          (
            item,
            index
          ) => {

            const isOpen =
              openIndex === index;

            return (

              <div
                key={index}
                className="
                border
                border-slate-200
                dark:border-slate-800
                rounded-2xl
                overflow-hidden
                "
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  className="
                  w-full
                  px-5
                  py-4
                  flex
                  justify-between
                  items-center
                  text-left
                  bg-white
                  dark:bg-slate-900
                  "
                >

                  <span
                    className="
                    font-medium
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {index + 1}.
                    {" "}
                    {item.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}

                </button>

                {isOpen && (

                  <div
                    className="
                    p-5
                    bg-slate-50
                    dark:bg-slate-950
                    border-t
                    border-slate-200
                    dark:border-slate-800
                    "
                  >

                    <div
                      className="
                      mb-5
                      "
                    >

                      <h4
                        className="
                        text-sm
                        font-semibold
                        text-blue-500
                        mb-2
                        "
                      >
                        Interviewer's Intention
                      </h4>

                      <p
                        className="
                        text-slate-700
                        dark:text-slate-300
                        "
                      >
                        {item.intention}
                      </p>

                    </div>

                    <div>

                      <h4
                        className="
                        text-sm
                        font-semibold
                        text-green-500
                        mb-2
                        "
                      >
                        Suggested Answer
                      </h4>

                      <p
                        className="
                        text-slate-700
                        dark:text-slate-300
                        whitespace-pre-wrap
                        "
                      >
                        {item.answer}
                      </p>

                    </div>

                  </div>

                )}

              </div>

            );
          }
        )}

      </div>

    </div>

  );

};

export default TechnicalQuestions;