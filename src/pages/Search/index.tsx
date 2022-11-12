import React, {useEffect, useState} from 'react';
import CardList from "../../components/CardList";
import styled from "styled-components";
import RecentList from "./RecentList";
import RecommendList from "./RecommendList";
import NewCompList from "./NewCompList";

const Index = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  }

  return (
    <Wrapper>
      <HiddenTitle>검색</HiddenTitle>
      <RecentList/>
      <RecommendList/>
      <NewCompList/>
      <CardList data={list}/>
    </Wrapper>
  );
};

export default Index;

const Wrapper  = styled.section`
  padding: 0 16px;
`

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;