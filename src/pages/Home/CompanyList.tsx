import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";
import { TitleH3 } from "../../style/style";
import TxtNoCompList from "../../components/TxtNoCompList";
import * as mockData from "../../mockData";

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
      <Wrapper>
        <TitleH3>이 기업들을 살펴보세요</TitleH3>
        <TxtNoCompList />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TitleH3>이 기업들을 살펴보세요</TitleH3>
      <CardList data={list} reload={true} />
    </Wrapper>
  );
};

export default CompanyList;

const Wrapper = styled.section`
  margin-top: 20px;
`;
