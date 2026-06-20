import {
  TrendingUp,
  Award,
} from "lucide-react";

const MatchScoreCard = ({
  matchScore = 0,
}) => {

  const getStatus = () => {

    if (matchScore >= 85) {
      return {
        text: "Excellent Match",
        color: "text-green-500",
      };
    }

    if (matchScore >= 70) {
      return {
        text: "Good Match",
        color: "text-blue-500",
      };
    }

    if (matchScore >= 50) {
      return {
        text: "Average Match",
        color: "text-yellow-500",
      };
    }

    return {
      text: "Needs Improvement",
      color: "text-red-500",
    };

  };

  const status =
    getStatus();

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
            Match Score
          </h3>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            Resume vs Job Description
          </p>

        </div>

        <Award
          className="
          text-blue-500
          "
        />

      </div>

      <div
        className="
        flex
        items-end
        gap-2
        "
      >

        <span
          className="
          text-5xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          {matchScore}
        </span>

        <span
          className="
          text-xl
          font-semibold
          text-slate-500
          mb-1
          "
        >
          %
        </span>

      </div>

      <div
        className="
        mt-5
        "
      >

        <div
          className="
          h-3
          rounded-full
          bg-slate-200
          dark:bg-slate-800
          overflow-hidden
          "
        >

          <div
            style={{
              width: `${matchScore}%`,
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            transition-all
            duration-1000
            "
          />

        </div>

      </div>

      <div
        className="
        mt-5
        flex
        items-center
        gap-2
        "
      >

        <TrendingUp
          size={18}
          className={
            status.color
          }
        />

        <span
          className={`
            font-medium
            ${status.color}
          `}
        >
          {status.text}
        </span>

      </div>

    </div>

  );

};

export default MatchScoreCard;