import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import CardSimple from "../CardSimple";
import { prodList } from "../../mockData";
import styled from "styled-components";

const CompProd = () => {
  if (prodList.length === 0) {
    return (
      <DetailWrapper>
        <DetailTitleH3>업사이클링 제품 정보</DetailTitleH3>
        <TxtGray>기업의 등록된 제품이 없습니다.</TxtGray>
      </DetailWrapper>
    );
  }

  return (
    <DetailWrapper>
      <DetailTitleH3>업사이클링 제품 정보</DetailTitleH3>
      <Ul>
        {prodList.map((product) => {
          const { id, name, img } = product;
          return (
            <React.Fragment key={id}>
              <CardSimple id={id} img={img} name={name} type={"product"} />
            </React.Fragment>
          );
        })}
      </Ul>
    </DetailWrapper>
  );
};

export default CompProd;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  justify-content: space-between;
`;

const TxtGray = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;
