import Navbar from "../components/common/Navbar";

const MainLayout = ({
  children,
}) => {

  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-blue-50
      to-indigo-100
      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950
      transition-all
      duration-300
      "
    >

      <Navbar />

      <main
        className="
        max-w-7xl
        mx-auto
        px-6
        py-6
        "
      >
        {children}
      </main>

    </div>

  );

};

export default MainLayout;