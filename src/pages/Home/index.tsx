import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {OneWayButton, TwoWayButton} from "../../components/Button";
import {Icon16} from "../../style/style";
import CardList from "../../components/CardList";

const Index = () => {
  const [list, setList] = useState([]);

  useEffect( () => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  }

  const onClick = () => {
    console.log("CLICKED!");
  }

  const onClick2 = () => {
    console.log("OPENED!");
  }

  const onClick3 = () => {
    console.log("CLOSED!");
  }

  return (
    <>
      <Title>
        안녕하세요.
      </Title>
      <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={true} onClick={onClick}>
        <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘"/>
        <span>새로고침</span>
      </OneWayButton>
      <TwoWayButton text={"labelMd"} color={"keyWhite"} round={"md"}>
        <span onClick={onClick2}>선택가능</span>
        <Icon16 src={require("../../assets/icon/icon_close.png")} alt="삭제" onClick={onClick3}/>
      </TwoWayButton>
      {/*<CardList data={list}/>*/}
    </>
  );
};

export default Index;

const Title = styled.p`
  ${({theme}) => theme.TEXT.headerMd};
`