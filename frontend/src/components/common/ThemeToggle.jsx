import useTheme from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <button
      onClick={toggleTheme}
      className="
      group
      relative
      overflow-hidden
      h-10
      px-4
      rounded-xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/60
      dark:bg-slate-800/60
      backdrop-blur-md
      hover:shadow-lg
      hover:scale-105
      active:scale-95
      transition-all
      duration-300
      flex
      items-center
      gap-2
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500/0
        via-blue-500/5
        to-blue-500/0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        "
      />

      {theme === "light" ? (
        <>
          <Moon
            size={16}
            className="
            relative
            text-slate-700
            group-hover:rotate-12
            transition-all
            duration-300
            "
          />

          <span
            className="
            relative
            text-sm
            font-medium
            text-slate-700
            "
          >
            Dark
          </span>
        </>
      ) : (
        <>
          <Sun
            size={16}
            className="
            relative
            text-yellow-400
            group-hover:rotate-180
            transition-all
            duration-500
            "
          />

          <span
            className="
            relative
            text-sm
            font-medium
            text-white
            "
          >
            Light
          </span>
        </>
      )}

    </button>

  );

};

export default ThemeToggle;