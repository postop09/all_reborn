import React from "react";
import styled from "styled-components";
import DetailIntroduce from "./DetailIntroduce";
import DetailRecycle from "./DetailRecycle";
import DetailProduct from "./DetailProduct";
import DetailCompany from "./DetailCompany";

const DetailForm = () => {
  return (
    <section>
      <Img src={""} alt="기업 이미지" />
      <HiddenTitle>상세조회</HiddenTitle>
      <Wrapper>
        <DetailIntroduce />
        <DetailRecycle />
        <DetailProduct />
        <DetailCompany />
      </Wrapper>
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
