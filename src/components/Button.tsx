import React from "react";
import styled from "styled-components";

type Base = {
  text: string;
  color: "keyWhite" | "keyOriginal" | "white";
  round: string;
  border?: boolean;
  clickable?: boolean;
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
  const { children, onClick } = props;

  return (
    <CustomButton {...props} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

// 2. X 버튼 등 서로 다른 역할을 하는 contents 인 버튼
export const TwoWayButton = (props: TwoWayButton) => {
  const { children } = props;

  return (
    <BtnWrapper {...props}>
      {children.map((child, index) => {
        return <React.Fragment key={index}>{child}</React.Fragment>;
      })}
    </BtnWrapper>
  );
};

const CustomButton = styled.button<Base>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({ text, theme }) => theme.TEXT[text]}
  border: ${({ border }) => (border ? "2px solid #4AA96C" : "none")};
  border-radius: ${({ round, theme }) => theme.ROUND[round]};
  background-color: ${({ color, theme }) => theme.COLOR[color]};
  cursor: ${({ clickable }) => (clickable ? "default" : "pointer")};
`;

const BtnWrapper = styled.span<Base>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({ text, theme }) => theme.TEXT[text]}
  border: ${({ border }) => (border ? "2px solid #4AA96C" : "none")};
  border-radius: ${({ round, theme }) => theme.ROUND[round]};
  background-color: ${({ color, theme }) => theme.COLOR[color]};
  cursor: ${({ clickable }) => (clickable ? "default" : "pointer")};
`;
