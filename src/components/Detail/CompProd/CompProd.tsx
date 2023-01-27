import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../../style/style";
import CardSimple from "../../CardSimple/CardSimple";
import { prodList } from "../../../mockData";
import * as S from "./CompProd.style";

const CompProd = () => {
  if (prodList.length === 0) {
    return (
      <DetailWrapper>
        <DetailTitleH3>업사이클링 제품 정보</DetailTitleH3>
        <S.TxtGray>기업의 등록된 제품이 없습니다.</S.TxtGray>
      </DetailWrapper>
    );
  }

  return (
    <DetailWrapper>
      <DetailTitleH3>업사이클링 제품 정보</DetailTitleH3>
      <S.Ul>
        {prodList.map((product) => {
          const { id, name, img } = product;
          return (
            <React.Fragment key={id}>
              <CardSimple id={id} img={img} name={name} type={"product"} />
            </React.Fragment>
          );
        })}
      </S.Ul>
    </DetailWrapper>
  );
};

export default CompProd;
