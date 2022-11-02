import React from 'react';
import styled from "styled-components";

type Base = {
  text: string;
  color: string;
  round: string;
}

interface ButtonProps extends Base {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  console.log(props);
  return (
    <CustomButton type="button" style={props} onClick={(e) => {
      props.onClick();
      console.log(e.target);
    }}>
      {props.children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  ${(props) => {
    console.log(props);
    const style = props.style;
    const theme = props.theme;
    const userText = style && style.text;
    return theme.TEXT[userText];
  }}
  ${({theme}) => theme.TEXT.labelMd};
  border-radius: ${({theme}) => theme.ROUND.xs};
  background-color: ${(props) => {
    const style = props.style;
    const userColor = style && style.color;
    const theme = props.theme;
    return userColor && theme.COLOR[userColor];
  }};
`