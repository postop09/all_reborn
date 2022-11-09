import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { OneWayButton, TwoWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import CardList from "../../components/CardList";
import useModals from "../../hook/useModal";
import MyModal from "../../components/MyModal";

const Index = () => {
  const { openModal } = useModals();
  const onClick = () => {
    console.log("CLICKED!");
    openModal(MyModal, { foo: "bar" });
  };

  const onClick2 = () => {
    console.log("OPENED!");
  };

  const onClick3 = () => {
    console.log("CLOSED!");
  };

  return (
    <>
      <Title>홈</Title>
      <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={true} onClick={onClick}>
        <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
        <span>새로고침</span>
      </OneWayButton>
      <TwoWayButton text={"labelMd"} color={"keyWhite"} round={"md"}>
        <span onClick={onClick2}>선택가능</span>
        <Icon16 src={require("../../assets/icon/icon_close.png")} alt="삭제" onClick={onClick3} />
      </TwoWayButton>
    </>
  );
};

export default Index;

const Title = styled.h2`
  ${({ theme }) => theme.TEXT.headerMd};
`;
