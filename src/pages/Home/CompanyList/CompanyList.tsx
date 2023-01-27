import React, { useEffect, useState } from "react";
import CardList from "../../../components/CardList/CardList";
import { TitleH3 } from "../../../style/style";
import NoCompListTxt from "../../../components/TxtNoCompList/noCompListTxt";
import * as mockData from "../../../mockData";
import * as S from "./CompanyList.style";

const CompanyList = () => {
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

  if (list.length === 0) {
    return (
      <S.Wrapper>
        <TitleH3>이 기업들을 살펴보세요</TitleH3>
        <NoCompListTxt />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <TitleH3>이 기업들을 살펴보세요</TitleH3>
      <CardList data={list} reload={true} />
    </S.Wrapper>
  );
};

export default CompanyList;
