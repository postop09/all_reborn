import React from 'react';
import * as S from "./CategoryWrapper.style";
import DropDown from "../DropDown/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/keywordList";
import useCategory from "../../hooks/useCategory";

type CateProps = {
  listLength: number;
};

const CategoryWrapper = ({listLength}: CateProps) => {
  const {productSelect, setProductSelect, recycleSelect, setRecycleSelect} = useCategory();

  return (
    <S.CateWrapper>
      <S.TxtSearchCount>전체 {listLength}개</S.TxtSearchCount>
      {listLength !== 0 && (
        <>
          <DropDown
            list={PRODUCT_LIST}
            select={productSelect}
            setSelect={setProductSelect}
            defaultValue={"제품 분야"}
          />
          <DropDown
            list={RECYCLE_LIST}
            select={recycleSelect}
            setSelect={setRecycleSelect}
            defaultValue={"재활용품 종류"}
          />
        </>
      )}
    </S.CateWrapper>
  );
};

export default CategoryWrapper;