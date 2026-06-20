import {
  BrainCircuit,
  Home,
  FileText,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

const Navbar = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const navItems = [
    {
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      label: "Reports",
      icon: FileText,
      path: "/reports",
    },
  ];

  return (

    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/70
      dark:bg-slate-950/70
      border-b
      border-slate-200
      dark:border-slate-800
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <button
          onClick={() =>
            navigate("/")
          }
          className="
          flex
          items-center
          gap-3
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            flex
            items-center
            justify-center
            shadow-lg
            "
          >

            <BrainCircuit
              className="
              text-white
              "
            />

          </div>

          <div
            className="
            text-left
            "
          >

            <h2
              className="
              font-bold
              text-slate-900
              dark:text-white
              "
            >
              AI Interview Coach
            </h2>

            <p
              className="
              text-xs
              text-slate-500
              "
            >
              Interview Preparation
            </p>

          </div>

        </button>

        {/* Navigation */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-2
          "
        >

          {navItems.map(
            (item) => {

              const Icon =
                item.icon;

              const active =
                location.pathname ===
                item.path;

              return (

                <button
                  key={item.path}
                  onClick={() =>
                    navigate(
                      item.path
                    )
                  }
                  className={`
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-blue-600
                          text-white
                          shadow-md
                        `
                        : `
                          text-slate-600
                          dark:text-slate-300
                          hover:bg-slate-100
                          dark:hover:bg-slate-800
                        `
                    }
                  `}
                >

                  <Icon size={18} />

                  {item.label}

                </button>

              );

            }
          )}

        </div>

        {/* Actions */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          <ThemeToggle />

          <LogoutButton />

        </div>

      </div>

    </header>

  );

};

export default Navbar;