import React from "react";
import styled from "styled-components";
import CompIntro from "./CompIntro";
import CompRecycle from "./CompRecycle";
import CompProd from "./CompProd";
import CompInfo from "./CompInfo";
import ProdIntro from "./ProdIntro";
import ProdRecycle from "./ProdRecycle";
import ProdOthers from "./ProdOthers";

const DetailForm = () => {
  // TODO - 부모 컴포넌트에서 데이터를 요청하고 들어온다.
  //  받아온 데이터를 각 컴포넌트에 넘겨준다.
  //  구분자 값으로 제품 or 기업 다른 ui 를 보여준다.
  let standard = "company";

  return (
    <section>
      <Img src={""} alt="기업 이미지" />
      <HiddenTitle>상세조회</HiddenTitle>
      {standard === "company" ?
        <Wrapper>
          <CompIntro />
          <CompRecycle />
          <CompProd />
          <CompInfo />
        </Wrapper>
        :
        <Wrapper>
          <ProdIntro />
          <ProdRecycle />
          <ProdOthers />
        </Wrapper>
      }
    </section>
  );
};

export default DetailForm;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const Wrapper = styled.div`
  padding: 14px 16px;
`;

const Img = styled.img`
  min-height: 210px;
  background-color: #dddddd;
`;
