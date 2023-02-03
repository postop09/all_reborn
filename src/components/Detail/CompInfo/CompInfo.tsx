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

  const mockOverview = [
    {
      name: "대표자명",
      value: mock.name,
    },
    {
      name: "대표이메일주소",
      value: mock.email,
    },
    {
      name: "대표전화번호",
      value: mock.tel,
    },
    {
      name: "사업장주소",
      value: mock.comAddr,
    },
    {
      name: "매장주소",
      value: mock.storeAddr,
    },
  ];

  return (
    <section>
      <DetailTitleH3>기업 정보</DetailTitleH3>
      <dl>
        {mockOverview.map((item) => {
          return (
            <S.DataWrapper>
              <dt>{item.name}</dt>
              <dd>{item.value}</dd>
            </S.DataWrapper>
          )
        })}
      </dl>
    </section>
  );
};

export default CompInfo;
