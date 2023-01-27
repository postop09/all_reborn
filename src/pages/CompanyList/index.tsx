import React, { useEffect, useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/keywordList";
import CardList from "../../components/CardList/CardList";
import NoCompListTxt from "../../components/TxtNoCompList/noCompListTxt";
import * as mockData from "../../mockData";
import * as S from "./index.style";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    if (process.env.NODE_ENV === "development") {
      const res = await fetch("/list");
      const json = await res.json();
      const data = json.data;
      setList(data);
    } else {
      const mockList: any = mockData.list;
      setList(mockList);
    }
  };

  return (
    <S.Wrapper>
      <S.HiddenTitle>기업목록</S.HiddenTitle>
      <S.CateWrapper>
        <S.TxtSearchCount>전체 {list.length}개</S.TxtSearchCount>
        {list.length > 0 && (
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
      {list.length > 0 ? <CardList data={list} /> : <NoCompListTxt />}
    </S.Wrapper>
  );
};

export default Index;
