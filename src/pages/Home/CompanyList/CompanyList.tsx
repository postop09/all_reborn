import React from "react";
import CardList from "../../../components/CardList/CardList";
import { TitleH3 } from "../../../style/style";
import NoCompListTxt from "../../../components/TxtNoCompList/noCompListTxt";
import * as S from "./CompanyList.style";
import useGetCompList from "../../CompanyList/hook/useGetCompList";

const CompanyList = () => {
  const {list} = useGetCompList();

  return (
    <S.Wrapper>
      <TitleH3>이 기업들을 살펴보세요</TitleH3>
      {list.length === 0 ? <NoCompListTxt /> : <CardList data={list} reload={true} />}
    </S.Wrapper>
  );
};

export default CompanyList;
