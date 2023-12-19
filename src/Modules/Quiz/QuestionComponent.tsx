import React from "react";
import { useRadioGroup, HStack, Box } from "@chakra-ui/react";
import QuestionHeader from "./QuestionHeader";
import RadioCard from "../../Components/Radio/RadioCards";

interface QuestionComponentProps {
  question: {
    question: string;
    answers: string[];
  };
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "question",
    value: selectedAnswer !== null ? selectedAnswer.toString() : '',
    onChange: (value) => onAnswerSelect(parseInt(value)),
  });

  const group = getRootProps();

  return (
    <Box width="80%">
      <QuestionHeader question={question.question} />
      <HStack {...group} alignItems={"flex-start"} flexDirection={"column"} m="1rem 0">
        {question.answers.map((answer, index) => {
          const radioProps = getRadioProps({ value: index.toString() });
          return (
            <RadioCard key={index} {...radioProps} value={index.toString()}>
              {answer}
            </RadioCard>
          );
        })}
      </HStack>
    </Box>
  );
};

export default QuestionComponent;
