import {
  Code2,
  Users,
  CalendarDays,
} from "lucide-react";

const ReportSidebar = ({
  activeTab,
  setActiveTab,
}) => {

  const menuItems = [
    {
      id: "technical",
      label: "Technical",
      icon: Code2,
    },
    {
      id: "behavioral",
      label: "Behavioral",
      icon: Users,
    },
    {
      id: "roadmap",
      label: "Roadmap",
      icon: CalendarDays,
    },
  ];

  return (

    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-200
      dark:border-slate-800
      rounded-3xl
      p-4
      shadow-sm
      "
    >

      <h3
        className="
        text-sm
        uppercase
        tracking-wider
        text-slate-500
        mb-4
        "
      >
        Report Sections
      </h3>

      <div
        className="
        flex
        flex-col
        gap-2
        "
      >

        {menuItems.map(
          (item) => {

            const Icon =
              item.icon;

            const active =
              activeTab === item.id;

            return (

              <button
                key={item.id}
                onClick={() =>
                  setActiveTab(
                    item.id
                  )
                }
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  text-left

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-blue-600
                        to-violet-600
                        text-white
                        shadow-lg
                      `
                      : `
                        text-slate-700
                        dark:text-slate-300
                        hover:bg-slate-100
                        dark:hover:bg-slate-800
                      `
                  }
                `}
              >

                <Icon size={18} />

                <span
                  className="
                  font-medium
                  "
                >
                  {item.label}
                </span>

              </button>

            );

          }
        )}

      </div>

    </div>

  );

};

export default ReportSidebar;