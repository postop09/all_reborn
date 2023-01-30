import React, { useContext, useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import RecentList from "./RecentList/RecentList";
import RecommendList from "./RecommendList/RecommendList";
import NewCompList from "./NewCompList/NewCompList";
import { AppContext } from "../../context/AppContext";
import INoSearch from "../../assets/image/img_noSearch.png";
import * as S from "./index.style";
import CategoryWrapper from "../../components/CategoryWrapper/CategoryWrapper";

const Index = () => {
  const { searchList, searchCase, setSearchCase }: any = useContext(AppContext);

  useEffect(() => {
    setSearchCase("default");
  }, []);

  // 검색 결과가 있는 화면
  if (searchCase === "hasData") {
    return (
      <S.Wrapper>
        <S.HiddenTitle>검색 결과</S.HiddenTitle>
        <CategoryWrapper listLength={searchList.length} />
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
