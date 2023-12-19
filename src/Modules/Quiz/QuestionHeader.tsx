import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SpaceBg from "../../Assets/Images/space2.png";
import { commonRadius } from "../../Styles/Style";

interface QuestionHeaderProps {
  question: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ question }) => {
  return (
    <Box
      bgImage={`url(${SpaceBg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius={commonRadius}
      padding="1rem"
      height="fit-content"
      minHeight="15rem"
      display="flex"
    >
      <Text
        as="h1"
        fontSize="1.5rem"
        bg={"rgba(255,255,255,.8)"}
        width={"fit-content"}
        padding=".5rem 1rem"
        borderRadius={commonRadius}
        margin="auto"
      >
        {question}
      </Text>
    </Box>
  );
};

export default QuestionHeader;
