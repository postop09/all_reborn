import React from "react";
import { DetailTitleH3 } from "../../../style/style";
import * as S from "./CompInfo.style";

const CompInfo = () => {
  const mock = {
    name: "홍길동",
    email: "honggildong@asd.com",
    tel: "010-0000-0000",
    comAddr: "사랑시 고백구 행복동 강백호",
    storeAddr: "-",
  };

  return (
    <section>
      <DetailTitleH3>기업 정보</DetailTitleH3>
      <dl>
        <S.DataWrapper>
          <dt>대표자명</dt>
          <dd>{mock.name}</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>대표이메일주소</dt>
          <dd>{mock.email}</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>대표전화번호</dt>
          <dd>{mock.tel}</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>사업장주소</dt>
          <dd>{mock.comAddr}</dd>
        </S.DataWrapper>
        <S.DataWrapper>
          <dt>매장주소</dt>
          <dd>{mock.storeAddr}</dd>
        </S.DataWrapper>
      </dl>
    </section>
  );
};

export default CompInfo;
