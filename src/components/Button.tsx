import React from 'react';
import styled from "styled-components";

type Base = {
  text: string;
  color: string;
  round: string;
}

interface ButtonProps extends Base {
  children: React.ReactNode | React.ReactNode[];
}

const Button = (props: ButtonProps) => {
  console.log(props);
  const children = props.children;

  const renderArray = () => {
    if (Array.isArray(children)) {
      return (
        <Wrapper style={props}>
          {children.map((child) => {
            return (
                <Contents type="button">
                  {child}
                </Contents>
            )
          })}
        </Wrapper>
      )
    }
  };

  const renderSingle = () => {
    return (
      <SingleButton style={props}>
        {children}
      </SingleButton>
    )
  };

  return (
    <>
      {Array.isArray(children) ?
        renderArray()
        :
        renderSingle()
      }
    </>
  )
};

export default Button;

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({theme}) => theme.TEXT.labelMd};
  border-radius: ${({theme}) => theme.ROUND.xs};
  background-color: ${(props) => {
    const style = props.style;
    const userColor = style && style.color;
    const theme = props.theme;
    return userColor && theme.COLOR[userColor];
  }};
`
const Contents = styled.button`
  display: block;
  padding: 0;
  height: 100%;
  background: none;
`

const SingleButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  ${({theme}) => theme.TEXT.labelMd};
  border-radius: ${({theme}) => theme.ROUND.xs};
  background-color: ${(props) => {
    const style = props.style;
    const userColor = style && style.color;
    const theme = props.theme;
    return userColor && theme.COLOR[userColor];
  }};
`