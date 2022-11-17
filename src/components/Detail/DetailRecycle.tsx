import React, { useState } from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import styled from "styled-components";
import { OneWayButton } from "../Button";

const DetailRecycle = () => {
  const [tabIndex, setTabIndex] = useState(99);
  // TODO - 받아 온 재활용품 목록 정제
  const recycleList = ["캔", "플라스틱", "유리"];

  // 재활용품 수거방법 상세보기
  const onShowDetail = (index: number) => {
    if (tabIndex === index) {
      setTabIndex(99);
    } else {
      setTabIndex(index);
    }
  };

  // 클립보드 복사
  // TODO - 복사완료 메시지 react-toast
  const onCopyAddress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const address = e.currentTarget.textContent;
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  return (
    <DetailWrapper>
      <DetailTitleH3>재활용품 사용 정보</DetailTitleH3>
      <RecycleWrapper>
        <div>
          <dt>사용 재활용품</dt>
          <dd>
            <RecycleList>
              {recycleList.map((item, index) => {
                return <RecycleItem key={index}>{item}</RecycleItem>;
              })}
            </RecycleList>
          </dd>
        </div>
        <div>
          <dt>재활용품 수거방법</dt>
          <dd>
            <RecycleList>
              {recycleList.map((item, index) => {
                return (
                  <RecycleItem key={index}>
                    <OneWayButton
                      text={"label12"}
                      color={tabIndex === index ? "keyOriginal" : "keyWhite"}
                      round={"md"}
                      onClick={() => onShowDetail(index)}
                    >
                      {item}
                    </OneWayButton>
                  </RecycleItem>
                );
              })}
            </RecycleList>
          </dd>
        </div>
        <div>
          {tabIndex === 0 && (
            <BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 구미호
            </BtnCopyDetail>
          )}
          {tabIndex === 1 && (
            <BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 나로호
            </BtnCopyDetail>
          )}
          {tabIndex === 2 && (
            <BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 강백호
            </BtnCopyDetail>
          )}
        </div>
      </RecycleWrapper>
    </DetailWrapper>
  );
};

export default DetailRecycle;

const RecycleWrapper = styled.dl`
  dt {
    margin-right: 8px;
    ${({ theme }) => theme.TEXT.body14};
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const RecycleList = styled.ul`
  display: flex;
  margin: 8px 0;
  ${({ theme }) => theme.TEXT.body14}
`;

const RecycleItem = styled.li`
  display: flex;
  align-items: center;

  &:not(li:last-child)::after {
    content: "";
    display: inline-block;
    border-radius: 100%;
    margin: 0 4px 2px;
    width: 4px;
    height: 4px;
    vertical-align: middle;
    background: #00000080;
  }
`;

const BtnCopyDetail = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  text-align: left;
  ${({ theme }) => theme.TEXT.body12};
  border-radius: ${({ theme }) => theme.ROUND.sm};
  background-color: ${({ theme }) => theme.COLOR.keyWhite};
  transition: all 0.1s;

  &:active {
    background-color: rgba(74, 169, 108, 0.5);
  }
`;
