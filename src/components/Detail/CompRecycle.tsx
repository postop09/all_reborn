import React, { useState } from "react";
import { DetailTitleH3, DetailWrapper } from "../../style/style";
import styled from "styled-components";
import { OneWayButton } from "../Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecycleList from "../RecycleList";

const CompRecycle = () => {
  const [tabIndex, setTabIndex] = useState(99);
  // TODO - 받아 온 재활용품 목록 정제
  const recycleList = ["가죽", "플라스틱", "유리"];

  // 재활용품 수거방법 상세보기
  const onShowDetail = (index: number) => {
    if (tabIndex === index) {
      setTabIndex(99);
    } else {
      setTabIndex(index);
    }
  };

  // 클립보드 복사
  const onCopyAddress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const address = e.currentTarget.textContent;
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success("클립보드에 복사되었습니다.", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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
          <dt>재활용품 수거방법</dt>
          <dd>
            <ProductList>
              {recycleList.map((item, index) => {
                return (
                  <ProductItem key={index}>
                    <OneWayButton
                      text={"label12"}
                      color={tabIndex === index ? "keyOriginal" : "keyWhite"}
                      round={"md"}
                      onClick={() => onShowDetail(index)}
                    >
                      {item}
                    </OneWayButton>
                  </ProductItem>
                );
              })}
            </ProductList>
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
              사랑시 고백구 행복동 하하호호
            </BtnCopyDetail>
          )}
        </div>
      </RecycleWrapper>
      <StyledToast />
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

const ProductList = styled.ul`
  display: flex;
  margin: 8px 0;
  ${({ theme }) => theme.TEXT.body14}
`;

const ProductItem = styled.li`
  &:not(li:last-child) {
    margin-right: 4px;
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

const StyledToast = styled(ToastContainer)`
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: ${({ theme }) => theme.COLOR.keyOriginal};
  }
`;
