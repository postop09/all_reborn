import React from "react";
import styled from "styled-components";

const TxtNoCompList = () => {
  return (
    <TxtWrapper>
      <span>등록된 기업이 없습니다.</span>
      <span>팀 올리본은 기업등록을 서둘러주세요!</span>
    </TxtWrapper>
  );
};

export default TxtNoCompList;

const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.pointOriginal};

  span {
    display: block;
  }
`;
