import React, { useState } from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import styled from "styled-components";
import { OneWayButton } from "../Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecycleList from "../RecycleList";

const CompRecycle = () => {
  // TODO - 받아 온 재활용품 목록 정제
  const recycleList = ["가죽", "플라스틱", "유리"];

  return (
    <DetailWrapper>
      <DetailTitleH3>재활용품 사용 정보</DetailTitleH3>
      <RecycleWrapper>
        <div>
          <dt>사용 재활용품</dt>
          <dd>
            <RecycleList recycleList={recycleList} />
          </dd>
        </div>
        <div>
          <dt>제품 상세정보</dt>
          <dd>
            <Link href="">제품 바로가기</Link>
          </dd>
        </div>
      </RecycleWrapper>
    </DetailWrapper>
  );
};

export default CompRecycle;

const RecycleWrapper = styled.dl`
  dt {
    flex: 1;
    margin-right: 8px;
    ${({ theme }) => theme.TEXT.body14};
  }

  dd {
    flex: 2;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const Link =styled.a`
  ${({theme}) => theme.TEXT.body14};
  color: ${({theme}) => theme.COLOR.secondOriginal};
  text-decoration: underline;
`