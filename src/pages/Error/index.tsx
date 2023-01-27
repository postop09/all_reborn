import React from "react";
import * as S from "./index.style";

const Index = () => {
  return (
    <S.Wrapper>
      <S.HiddenTitle>오류페이지</S.HiddenTitle>
      <S.TxtWrapper>
        <S.Strong>접근 실패🤦‍♂️</S.Strong>
        <p>아직 개발중입니다... 느려서 죄송합니다.</p>
        <p>어서 돌아가주세요</p>
      </S.TxtWrapper>
    </S.Wrapper>
  );
};

export default Index;
