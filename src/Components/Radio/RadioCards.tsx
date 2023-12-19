import React from "react";
import { useRadio, Box } from "@chakra-ui/react";
import { Grey200, Navy600 } from "../../Styles/Colors";
import { commonRadius } from "../../Styles/Style";

interface RadioCardProps {
  children: React.ReactNode;
  value: string
}

const RadioCard: React.FC<RadioCardProps> = (
  props
) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius={commonRadius}
        _checked={{
          bg: Grey200,
          color: Navy600,
          border: "transparent",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
