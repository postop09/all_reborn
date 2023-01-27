import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../../style/style";
import * as S from "./ProdIntro.style";

const CompIntro = () => {
  return (
    <DetailWrapper>
      <DetailTitleH3>
        제품명<S.HiddenTxt> 소개</S.HiddenTxt>
      </DetailTitleH3>
      <S.Contents>
        비밀은 셋 중 둘이 죽었을 때에만 지킬 수 있다. 성공은 열심히 노력하며 기다리는 사람에게 찾아온다. 인간의 감정은
        누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.
      </S.Contents>
    </DetailWrapper>
  );
};

export default CompIntro;
