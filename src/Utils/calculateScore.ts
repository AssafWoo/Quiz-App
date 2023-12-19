import { Question } from '../Context/QuizContext';

export const calculateScore = (userAnswers: { [key: number]: number }, questions: Question[]): number => {
    if (!questions) return 0;
  
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswerIndex === userAnswers[index]) {
        correctAnswers++;
      }
    });
    return (correctAnswers / questions.length) * 100;
  };
  