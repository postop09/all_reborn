import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import CardSimple from "../CardSimple";
import { prodList } from "../../mockData";
import styled from "styled-components";

const CompProd = () => {
  // TODO 상위 컴포넌트에서 데이터를 받아와서 출력
  //  + type 체크

  if (prodList.length === 0) {
    return (
      <section>
        <DetailTitleH3>다른 제품 둘러보기</DetailTitleH3>
        <TxtGray>기업의 등록된 다른 제품이 없습니다.</TxtGray>
      </section>
    );
  }

  return (
    <section>
      <DetailTitleH3>다른 제품 둘러보기</DetailTitleH3>
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
    </section>
  );
};

export default CompProd;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  justify-content: space-between;

  &::after {
    content: "";
    display: block;
    width: 109px;
    @media screen and (max-width: 380px) {
      width: 100px;
      height: 100px;
    }
    @media screen and (min-width: 415px) {
      width: 120px;
      height: 120px;
    }
  }
`;

const TxtGray = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;
