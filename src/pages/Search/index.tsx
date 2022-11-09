import React, {useEffect, useState} from 'react';
import CardList from "../../components/CardList";
import styled from "styled-components";

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
    <>
      <Title>검색</Title>
      <CardList data={list}/>
    </>
  );
};

export default Index;

const Title = styled.h2`
  ${({theme}) => theme.TEXT.headerMd};
`