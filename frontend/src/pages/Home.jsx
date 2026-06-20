import MainLayout from "../layout/MainLayout";
import InterviewForm from "../components/interview/InterviewForm";

const Home = () => {
  return (

    <MainLayout>

      <div
        className="
        text-center
        mb-6
        "
      >

        <h1
          className="
          text-3xl
          lg:text-5xl
          font-bold
          tracking-tight
          text-slate-900
          dark:text-white
          "
        >
          Generate Interview Report
        </h1>

        <p
          className="
          mt-2
          text-sm
          lg:text-base
          text-slate-600
          dark:text-slate-400
          "
        >
          Upload your resume, analyze job fit and prepare for interviews with AI.
        </p>

      </div>

      <InterviewForm />

    </MainLayout>

  );
};

export default Home;