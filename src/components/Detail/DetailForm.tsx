import React from "react";
import styled from "styled-components";
import DetailIntroduce from "./DetailIntroduce";
import DetailRecycle from "./DetailRecycle";
import DetailProduct from "./DetailProduct";
import DetailCompany from "./DetailCompany";

const DetailForm = () => {
  // TODO - 부모 컴포넌트에서 데이터를 요청하고 들어온다.
  //  받아온 데이터를 각 컴포넌트에 넘겨준다.
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
