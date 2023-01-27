import React from "react";
import * as S from "./noCompListTxt.style";

const NoCompListTxt = () => {
  return (
    <S.TxtWrapper>
      <span>등록된 기업이 없습니다.</span>
      <span>팀 올리본은 기업등록을 서둘러주세요!</span>
    </S.TxtWrapper>
  );
};

export default NoCompListTxt;
