import React from "react";
import * as S from "./Button.style";

export type Base = {
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
    <S.CustomButton {...props} onClick={onClick}>
      {children}
    </S.CustomButton>
  );
};

// 2. X 버튼 등 서로 다른 역할을 하는 contents 인 버튼
export const TwoWayButton = (props: TwoWayButton) => {
  const { children } = props;

  return (
    <S.BtnWrapper {...props}>
      {children.map((child, index) => {
        return <React.Fragment key={index}>{child}</React.Fragment>;
      })}
    </S.BtnWrapper>
  );
};
