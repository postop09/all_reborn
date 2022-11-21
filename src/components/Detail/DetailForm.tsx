import React from "react";
import styled from "styled-components";
import CompIntro from "./CompIntro";
import CompRecycle from "./CompRecycle";
import CompProd from "./CompProd";
import CompInfo from "./CompInfo";
import ProdIntro from "./ProdIntro";
import ProdRecycle from "./ProdRecycle";
import ProdOthers from "./ProdOthers";
import { useLocation } from "react-router-dom";

const DetailForm = () => {
  const location = useLocation();
  const type = location.state;

  return (
    <section>
      <Img src={""} alt="기업 이미지" />
      <HiddenTitle>상세조회</HiddenTitle>
      {type !== "product" ? (
        <Wrapper>
          <CompIntro />
          <CompRecycle />
          <CompProd />
          <CompInfo />
        </Wrapper>
      ) : (
        <Wrapper>
          <ProdIntro />
          <ProdRecycle />
          <ProdOthers />
        </Wrapper>
      )}
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
  width: 100%;
  min-height: 210px;
  background-color: #dddddd;
`;
