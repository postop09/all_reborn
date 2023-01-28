import React from "react";
import { DetailTitleH3, DetailWrapper } from "../../../style/style";
import "react-toastify/dist/ReactToastify.css";
import RecycleList from "../../RecycleList/RecycleList";
import * as S from "./ProdRecycle.style";

const CompRecycle = () => {
  // TODO - 받아 온 재활용품 목록 정제
  const recycleList = ["가죽", "플라스틱", "유리"];

  return (
    <DetailWrapper>
      <DetailTitleH3>재활용품 사용 정보</DetailTitleH3>
      <S.RecycleWrapper>
        <div>
          <dt>사용 재활용품</dt>
          <dd>
            <RecycleList recycleList={recycleList} />
          </dd>
        </div>
        <div>
          <dt>제품 상세정보</dt>
          <dd>
            <S.Link href="src/components/Detail">제품 바로가기</S.Link>
          </dd>
        </div>
      </S.RecycleWrapper>
    </DetailWrapper>
  );
};

export default CompRecycle;
