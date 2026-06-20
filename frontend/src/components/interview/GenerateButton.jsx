import {
  Sparkles,
  Loader2,
} from "lucide-react";

const GenerateButton = ({
  loading,
  onClick,
}) => {

  return (

    <button
      onClick={onClick}
      disabled={loading}
      className="
      group
      relative
      overflow-hidden
      w-full
      h-12
      rounded-2xl
      font-semibold
      text-white
      bg-gradient-to-r
      from-blue-600
      via-indigo-600
      to-violet-600
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-1
      active:translate-y-0
      disabled:cursor-not-allowed
      disabled:opacity-70
      transition-all
      duration-300
      "
    >

      {/* Animated Shine */}

      <div
        className="
        absolute
        inset-0
        -translate-x-full
        group-hover:translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        transition-transform
        duration-1000
        "
      />

      <div
        className="
        relative
        flex
        items-center
        justify-center
        gap-2
        "
      >

        {loading ? (
          <>
            <Loader2
              size={18}
              className="
              animate-spin
              "
            />

            <span>
              Generating...
            </span>
          </>
        ) : (
          <>
            <Sparkles
              size={18}
              className="
              group-hover:rotate-12
              transition-all
              duration-300
              "
            />

            <span>
              Generate Interview Report
            </span>
          </>
        )}

      </div>

    </button>

  );

};

export default GenerateButton;