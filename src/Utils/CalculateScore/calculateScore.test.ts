import { calculateScore } from './calculateScore';
import { Question } from '../../Context/QuizContext';

describe('calculateScore', () => {
  const questions: Question[] = [
    {
      "question": "What is the largest planet in our solar system?",
      "answers": ["Saturn", "Neptune","Jupiter", "Earth"],
      "correctAnswerIndex": 2
    },
    {
      "question": "How long does it take for light from the Sun to reach Earth?",
      "answers": ["8 minutes", "8 hours", "1 day", "1 second"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "answers": [ "Venus", "Jupiter", "Mercury","Mars"],
      "correctAnswerIndex": 3
    },
    {
      "question": "What is the most common type of star found in the Milky Way?",
      "answers": ["Red giant stars","Red dwarf stars", "Neutron stars", "White dwarf stars"],
      "correctAnswerIndex": 1
    },
    {
      "question": "Which planet has the most moons?",
      "answers": ["Earth", "Jupiter", "Mars", "Saturn"],
      "correctAnswerIndex": 3
    }
  ]
  

  it('should correctly calculate the score for all correct answers', () => {
    const userAnswers = { 0: 2, 1: 0, 2: 3, 3:1, 4:3 };
    const score = calculateScore(userAnswers, questions);
    expect(score).toBe(100);
  });

  it('should calculate a score of 0 for no correct answers', () => {
    const userAnswers = { 0: 3, 1: 1, 2: 2, 3:3, 4:0 };
    const score = calculateScore(userAnswers, questions);
    expect(score).toBe(0);
  });

  it('should correctly calculate the score for partial correct answers', () => {
    const userAnswers = { 0: 2, 1: 0, 2: 3, 3:2, 4:0 };
    const score = calculateScore(userAnswers, questions);
    expect(score).toBe(60); 
  });

});
