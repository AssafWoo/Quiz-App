import React, { createContext, useState, useEffect, ReactNode } from "react";
import questions from "../Data/questions.json";

export interface QuizContextType {
  quizData: Question[];
  userAnswers: { [key: number]: number | null };
  setUserAnswers: React.Dispatch<
    React.SetStateAction<{ [key: number]: number | null }>
  >;
}

export interface Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number | null }>({});

  useEffect(() => {
    setQuizData(questions);
  }, []);

  return (
    <QuizContext.Provider value={{ quizData, userAnswers, setUserAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};
