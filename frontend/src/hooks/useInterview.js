import { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";

export const useInterview = () => {
  return useContext(InterviewContext);
};