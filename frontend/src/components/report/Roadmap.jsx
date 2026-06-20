import {
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const Roadmap = ({
  preparationPlan = [],
}) => {

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

        <CalendarDays
          size={20}
          className="
          text-emerald-500
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
          Preparation Roadmap
        </h2>

      </div>

      <div
        className="
        space-y-5
        "
      >

        {preparationPlan.map(
          (
            dayPlan,
            index
          ) => (

            <div
              key={index}
              className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              rounded-2xl
              p-5
              "
            >

              <div
                className="
                flex
                items-center
                justify-between
                mb-4
                "
              >

                <div>

                  <span
                    className="
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    bg-blue-100
                    text-blue-700
                    dark:bg-blue-500/10
                    dark:text-blue-400
                    text-sm
                    font-medium
                    "
                  >
                    Day {dayPlan.day}
                  </span>

                </div>

              </div>

              <h3
                className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
                mb-4
                "
              >
                {dayPlan.focus}
              </h3>

              <div
                className="
                space-y-3
                "
              >

                {dayPlan.tasks.map(
                  (
                    task,
                    taskIndex
                  ) => (

                    <div
                      key={taskIndex}
                      className="
                      flex
                      items-start
                      gap-3
                      "
                    >

                      <CheckCircle2
                        size={18}
                        className="
                        mt-0.5
                        text-green-500
                        flex-shrink-0
                        "
                      />

                      <span
                        className="
                        text-slate-700
                        dark:text-slate-300
                        "
                      >
                        {task}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );

};

export default Roadmap;