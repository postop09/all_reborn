import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";
import { TitleH3 } from "../../style/style";
import TxtNoCompList from "../../components/TxtNoCompList";

const CompanyList = () => {
  const [list, setList] = useState([]);

  // 테스트용 데이터 호출
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList([]);
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
      <CardList data={list} />
    </Wrapper>
  );
};

export default CompanyList;

const Wrapper = styled.section`
  margin-top: 20px;
`;
