import { createContext, useState } from "react";

export const InterviewContext =
  createContext();

export const InterviewProvider = ({
  children,
}) => {

  const [report, setReport] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  return (
    <InterviewContext.Provider
      value={{
        report,
        setReport,
        loading,
        setLoading,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};