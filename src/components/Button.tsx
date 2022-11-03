import React from 'react';
import styled from "styled-components";

type Base = {
  text: string;
  color: "keyWhite" | "keyOriginal";
  round: string;
  border?: "Y" | "N";
}

interface ButtonProps extends Base {
  onClick: () => void;
  children: React.ReactNode | React.ReactNode[];
}

const Button = (props: ButtonProps) => {
  const {text, color, round, border, children, onClick} = props;

  return (
    <CustomButton text={text} round={round} border={border} color={color} onClick={onClick}>
      {children}
    </CustomButton>
  )
};

export default Button;

const CustomButton = styled.button<Base>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({text, theme}) => theme.TEXT[text]}
  border: ${({border}) => border === "Y" ? "2px solid #4AA96C" : "none"};
  border-radius: ${({round, theme}) => theme.ROUND[round]};
  background-color: ${({color, theme}) => theme.COLOR[color]};
`