import React from 'react';
import styled from "styled-components";

const Index = () => {
  return (
    <Title>
      안녕하세요.
    </Title>
  );
};

export default Index;

const Title = styled.p`
  ${({theme}) => theme.TEXT.headerMd};
`