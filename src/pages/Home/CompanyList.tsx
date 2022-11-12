import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";

const CompanyList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  };

  return (
    <Wrapper>
      <Title>이 기업들을 살펴보세요</Title>
      <CardList data={list} />
    </Wrapper>
  );
};

export default CompanyList;

const Wrapper = styled.section`
  margin-top: 20px;
`

const Title = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.TEXT.headerMd}
`;
