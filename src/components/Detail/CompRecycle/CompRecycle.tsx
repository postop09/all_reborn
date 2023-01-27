import React, { useState } from "react";
import { DetailTitleH3, DetailWrapper } from "../../../style/style";
import { OneWayButton } from "../../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecycleList from "../../RecycleList/RecycleList.style";
import * as S from "./CompRecycle.style";

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
      <S.RecycleWrapper>
        <div>
          <dt>사용 재활용품</dt>
          <dd>
            <RecycleList recycleList={recycleList} />
          </dd>
        </div>
        <div>
          <dt>재활용품 수거방법</dt>
          <dd>
            <S.ProductList>
              {recycleList.map((item, index) => {
                return (
                  <S.ProductItem key={index}>
                    <OneWayButton
                      text={"label12"}
                      color={tabIndex === index ? "keyOriginal" : "keyWhite"}
                      round={"md"}
                      onClick={() => onShowDetail(index)}
                    >
                      {item}
                    </OneWayButton>
                  </S.ProductItem>
                );
              })}
            </S.ProductList>
          </dd>
        </div>
        <div>
          {tabIndex === 0 && (
            <S.BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 구미호
            </S.BtnCopyDetail>
          )}
          {tabIndex === 1 && (
            <S.BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 나로호
            </S.BtnCopyDetail>
          )}
          {tabIndex === 2 && (
            <S.BtnCopyDetail type="button" title="클립보드에 복사" onClick={onCopyAddress}>
              사랑시 고백구 행복동 하하호호
            </S.BtnCopyDetail>
          )}
        </div>
      </S.RecycleWrapper>
      <S.StyledToast />
    </DetailWrapper>
  );
};

export default CompRecycle;
