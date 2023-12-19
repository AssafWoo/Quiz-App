import React, { useCallback, useContext, useEffect, useState } from "react";
import { QuizContext } from "../Context/QuizContext";
import QuestionComponent from "../Modules/Quiz/QuestionComponent";
import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { LightBlue, MainGreen } from "../Styles/Colors";
import { commonRadius } from "../Styles/Style";

const Quiz: React.FC = () => {
  const quizContext = useContext(QuizContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentQuestionIndex = parseInt(id ?? "1", 10) - 1;
  const [localUserAnswers, setLocalUserAnswers] = useState<{
    [key: number]: number | null;
  }>({});

  useEffect(() => {
    const quizLength = quizContext?.quizData?.length ?? 0;
    setLocalUserAnswers(Array.from({ length: quizLength }, () => null));
  }, [quizContext?.quizData]);


  const handleAnswerSelect = useCallback(
    (answerIndex: number) => {
      setLocalUserAnswers({
        ...localUserAnswers,
        [currentQuestionIndex]: answerIndex,
      });
    },
    [currentQuestionIndex, localUserAnswers]
  );

  if (!quizContext || quizContext.quizData.length === 0) {
    return <Skeleton width="100%" height="5rem" borderRadius={commonRadius} />;
  }

  const { quizData, setUserAnswers } = quizContext;

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      navigate(`/question/${currentQuestionIndex + 2}`);
    } else {
      setUserAnswers(localUserAnswers);
      navigate("/score");
    }
  };

  const handlePrevious = () => navigate(`/question/${currentQuestionIndex}`);

  return (
    <Box
      shadow="md"
      borderRadius={commonRadius}
      padding="1rem"
      textAlign="center"
      position="relative"
    >
      <Flex direction="column" align="center" justify="center">
        <QuestionComponent
          question={quizData[currentQuestionIndex]}
          selectedAnswer={localUserAnswers[currentQuestionIndex] ?? null}
          onAnswerSelect={handleAnswerSelect}
        />

        <Flex width="100%" justify="space-between" marginTop="1rem">
          {currentQuestionIndex > 0 && (
            <Button
              leftIcon={<IoIosArrowBack />}
              onClick={handlePrevious}
              bg={LightBlue}
              colorScheme="blue"
              borderRadius={commonRadius}
              fontWeight={300}
            >
              Previous
            </Button>
          )}

          <Box flex="1" textAlign="right">
            <Button
              borderRadius={commonRadius}
              fontWeight={300}
              rightIcon={
                currentQuestionIndex === quizData.length - 1 ? (
                  <IoIosCheckmarkCircleOutline size="1.3rem" />
                ) : (
                  <IoIosArrowForward />
                )
              }
              onClick={handleNext}
              bg={
                currentQuestionIndex === quizData.length - 1
                  ? MainGreen
                  : LightBlue
              }
              colorScheme={
                currentQuestionIndex === quizData.length - 1 ? "green" : "blue"
              }
              isDisabled={localUserAnswers[currentQuestionIndex] === null}
            >
              {currentQuestionIndex === quizData.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Quiz;
