import React from 'react';
import styled from "styled-components";

type Base = {
  text: string;
  color: "keyWhite" | "keyOriginal";
  round: string;
  border?: "Y" | "N";
  onClick?: () => void;
};
interface Button extends Base {
  children: React.ReactNode | React.ReactNode[];
}
interface TwoWayButton extends Base {
  children: React.ReactNode[];
}

// 1. 한가지 역할만 하는 버튼
export const OneWayButton = (props: Button) => {
  const {text, color, round, border, children, onClick} = props;

  return (
    <CustomButton text={text} round={round} border={border} color={color} onClick={onClick}>
      {children}
    </CustomButton>
  )
};

// 2. X 버튼 등 서로 다른 역할을 하는 contents 인 버튼
export const TwoWayButton = (props: TwoWayButton) => {
  const {text, color, round, border, children} = props;

  return (
    <CustomButton text={text} round={round} border={border} color={color}>
      {children.map((child, index) => {
        return (
          <React.Fragment key={index}>
            {child}
          </React.Fragment>
        )
      })}
    </CustomButton>
  )
};

const CustomButton = styled.button<Base>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({text, theme}) => theme.TEXT[text]}
  border: ${({border}) => border === "Y" ? "2px solid #4AA96C" : "none"};
  border-radius: ${({round, theme}) => theme.ROUND[round]};
  background-color: ${({color, theme}) => theme.COLOR[color]};
`;