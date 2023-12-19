import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { calculateScore } from "../Utils/calculateScore";
import { QuizContext } from "../Context/QuizContext";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { LightBlue } from "../Styles/Colors";
import Confetti from "react-confetti";
import WinnerPose from "../Assets/Images/power.svg";
import { percentageMessage } from "../Data/percentageMessage";
import { commonRadius } from "../Styles/Style";

const Score: React.FC = () => {
  const quizContext = useContext(QuizContext);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (quizContext) {
      const { userAnswers, quizData } = quizContext;
      const calculatedScore = calculateScore(userAnswers, quizData);
      setFinalScore(calculatedScore);

      const timer = setTimeout(() => {
        setLoading(false);
        if (calculatedScore >= 80) {
          setShowConfetti(true);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [quizContext]);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setAnimatedScore((prevScore) => {
          if (prevScore < finalScore!) {
            return prevScore + 1;
          }
          clearInterval(interval);
          return finalScore!;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [loading, finalScore]);

  const getPercentageMessage = (score: number) => {
    const roundedScore = Math.round(score / 10) * 10;
    return percentageMessage[roundedScore as keyof typeof percentageMessage];
  };

  if (!quizContext) {
    return <Text>Quiz data not available.</Text>;
  }

  return (
    <Box
      shadow="md"
      borderRadius={commonRadius}
      padding="1rem"
      textAlign={"center"}
      display="flex"
      justifyContent={"center"}
      flexDirection={"column"}
    >
      {loading ? (
        <Text as="h1">Calculating your score...</Text>
      ) : (
        <>
          {showConfetti && animatedScore === finalScore && (
            <Confetti numberOfPieces={400} recycle={false} />
          )}{" "}
          <Image src={WinnerPose} width="20rem" margin="auto" />
          <Text mt="1rem" fontSize={"1rem"} fontWeight={300}>
            You scored
          </Text>
          <Text fontSize={"1.5rem"} fontWeight={300}>
            {animatedScore} / 100
          </Text>
          {animatedScore === finalScore && (
            <Text mt="1rem"> {getPercentageMessage(animatedScore)}</Text>
          )}{" "}
          <Link to="/">
            <Button colorScheme="blue" bg={LightBlue} mt="1rem">
              Roll again
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
};

export default Score;
