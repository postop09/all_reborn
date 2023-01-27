import React from "react";
import CompIntro from "./CompIntro/CompIntro";
import CompRecycle from "./CompRecycle/CompRecycle";
import CompProd from "./CompProd/CompProd";
import CompInfo from "./CompInfo/CompInfo";
import ProdIntro from "./ProdIntro/ProdIntro";
import ProdRecycle from "./ProdRecycle/ProdRecycle";
import ProdOthers from "./ProdOthers/ProdOthers";
import { useLocation } from "react-router-dom";
import * as S from "./index.style";

const Index = () => {
  const location = useLocation();
  const type = location.state;

  return (
    <section>
      <S.Img src={""} alt="기업 이미지" />
      <S.HiddenTitle>상세조회</S.HiddenTitle>
      {type !== "product" ? (
        <S.Wrapper>
          <CompIntro />
          <CompRecycle />
          <CompProd />
          <CompInfo />
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <ProdIntro />
          <ProdRecycle />
          <ProdOthers />
        </S.Wrapper>
      )}
    </section>
  );
};

export default Index;
