import {
  AlertTriangle,
  TrendingDown,
} from "lucide-react";

const SkillGapCard = ({
  skillGaps = [],
}) => {

  const getSeverityStyle =
    (severity) => {

      switch (severity) {

        case "high":
          return {
            badge:
              "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400",
            dot:
              "bg-red-500",
          };

        case "medium":
          return {
            badge:
              "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
            dot:
              "bg-yellow-500",
          };

        default:
          return {
            badge:
              "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
            dot:
              "bg-green-500",
          };

      }

    };

  return (

    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-200
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-sm
      "
    >

      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        mb-6
        "
      >

        <div>

          <h3
            className="
            text-lg
            font-semibold
            text-slate-900
            dark:text-white
            "
          >
            Skill Gaps
          </h3>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            Areas requiring improvement
          </p>

        </div>

        <AlertTriangle
          className="
          text-orange-500
          "
        />

      </div>

      {/* Empty State */}

      {skillGaps.length === 0 && (

        <div
          className="
          text-center
          py-6
          "
        >

          <p
            className="
            text-green-500
            font-medium
            "
          >
            No significant skill gaps found 🎉
          </p>

        </div>

      )}

      {/* Skills */}

      <div
        className="
        space-y-4
        "
      >

        {skillGaps.map(
          (
            gap,
            index
          ) => {

            const style =
              getSeverityStyle(
                gap.severity
              );

            return (

              <div
                key={index}
                className="
                border
                border-slate-200
                dark:border-slate-800
                rounded-2xl
                p-4
                "
              >

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <div
                      className={`
                        w-3
                        h-3
                        rounded-full
                        ${style.dot}
                      `}
                    />

                    <span
                      className="
                      font-medium
                      text-slate-900
                      dark:text-white
                      "
                    >
                      {gap.skill}
                    </span>

                  </div>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      capitalize
                      ${style.badge}
                    `}
                  >
                    {gap.severity}
                  </span>

                </div>

              </div>

            );

          }
        )}

      </div>

      {/* Footer */}

      {skillGaps.length > 0 && (

        <div
          className="
          mt-6
          flex
          items-center
          gap-2
          text-sm
          text-slate-500
          "
        >

          <TrendingDown size={16} />

          Focus on high severity skills first.

        </div>

      )}

    </div>

  );

};

export default SkillGapCard; 