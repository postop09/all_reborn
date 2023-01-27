import React, { useContext, useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import RecentList from "./RecentList/RecentList";
import RecommendList from "./RecommendList/RecommendList";
import NewCompList from "./NewCompList/NewCompList";
import { AppContext } from "../../context/AppContext";
import DropDown from "../../components/DropDown/DropDown";
import { PRODUCT_LIST, RECYCLE_LIST } from "../../const/keywordList";
import INoSearch from "../../assets/image/img_noSearch.png";
import * as S from "./index.style";

const Index = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");
  const { searchList, searchCase, setSearchCase }: any = useContext(AppContext);

  useEffect(() => {
    setSearchCase("default");
  }, []);

  // 검색 결과가 있는 화면
  if (searchCase === "hasData") {
    return (
      <S.Wrapper>
        <S.HiddenTitle>검색 결과</S.HiddenTitle>
        <S.CateWrapper>
          <S.TxtSearchCount>검색결과 1,000개</S.TxtSearchCount>
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
        </S.CateWrapper>
        <CardList data={searchList} />
      </S.Wrapper>
    );
  }

  // 최초 검색 화면
  return (
    <S.Wrapper>
      <S.HiddenTitle>검색</S.HiddenTitle>
      <RecentList />
      {searchCase === "noData" && (
        <S.TxtNoList>
          <img src={INoSearch} alt="" />
          <span>[{searchList[0]}]</span> 에 대한 검색결과가 없습니다.
        </S.TxtNoList>
      )}
      <S.SubWrapper>
        <RecommendList />
        <NewCompList />
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Index;
