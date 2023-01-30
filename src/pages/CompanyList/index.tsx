import React from "react";
import CardList from "../../components/CardList/CardList";
import NoCompListTxt from "../../components/TxtNoCompList/noCompListTxt";
import * as S from "./index.style";
import useGetCompList from "./hook/useGetCompList";
import CategoryWrapper from "../../components/CategoryWrapper/CategoryWrapper";

const Index = () => {
  const {list} = useGetCompList();

  return (
    <S.Wrapper>
      <S.HiddenTitle>기업목록</S.HiddenTitle>
      <CategoryWrapper listLength={list.length} />
      {list.length > 0 ? <CardList data={list} /> : <NoCompListTxt />}
    </S.Wrapper>
  );
};

export default Index;
