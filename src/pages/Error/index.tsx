import React from "react";
import styled from "styled-components";

const Index = () => {
  return (
    <Wrapper>
      <HiddenTitle>오류페이지</HiddenTitle>
      <TxtWrapper>
        <Strong>접근 실패🤦‍♂️</Strong>
        <p>아직 개발중입니다... 느려서 죄송합니다.</p>
        <p>어서 돌아가주세요</p>
      </TxtWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  text-align: center;
`;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const TxtWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    ${({ theme }) => theme.TEXT.body14};
    font-weight: bold;
  }
`;

const Strong = styled.strong`
  display: inline-block;
  margin-bottom: 20px;
  ${({ theme }) => theme.TEXT.header20};
  font-weight: bold;
`;
