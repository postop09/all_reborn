import React from "react";
import { DetailTitleH3 } from "../../../style/style";
import CardSimple from "../../CardSimple/CardSimple";
import { prodList } from "../../../mockData";
import * as S from "./ProdOthers.style";

const CompProd = () => {
  // TODO 상위 컴포넌트에서 데이터를 받아와서 출력
  //  + type 체크

  if (prodList.length === 0) {
    return (
      <section>
        <DetailTitleH3>다른 제품 둘러보기</DetailTitleH3>
        <S.TxtGray>기업의 등록된 다른 제품이 없습니다.</S.TxtGray>
      </section>
    );
  }

  return (
    <section>
      <DetailTitleH3>다른 제품 둘러보기</DetailTitleH3>
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
    </section>
  );
};

export default CompProd;
