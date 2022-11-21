import React from "react";
import { DetailTitleH3 } from "../../style/style";
import styled from "styled-components";

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
        <DataWrapper>
          <dt>대표자명</dt>
          <dd>{mock.name}</dd>
        </DataWrapper>
        <DataWrapper>
          <dt>대표이메일주소</dt>
          <dd>{mock.email}</dd>
        </DataWrapper>
        <DataWrapper>
          <dt>대표전화번호</dt>
          <dd>{mock.tel}</dd>
        </DataWrapper>
        <DataWrapper>
          <dt>사업장주소</dt>
          <dd>{mock.comAddr}</dd>
        </DataWrapper>
        <DataWrapper>
          <dt>매장주소</dt>
          <dd>{mock.storeAddr}</dd>
        </DataWrapper>
      </dl>
    </section>
  );
};

export default CompInfo;

const DataWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  
  dt {
    flex: 1;
    color: ${({theme}) => theme.COLOR.secondOriginal};
  }
  dd {
    flex: 2;
  }
`