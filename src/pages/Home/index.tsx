import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { OneWayButton, TwoWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import useModals from "../../hook/useModal";
import MyModal from "../../components/modal/MyModal";
import CardSimple from "../../components/CardSimple";

const Index = () => {
  const { openModal } = useModals();
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    console.log("CLICKED!");
    openModal(MyModal, { foo: "bar" });
    // setIsOpen(true);
  };
  const handleClick = () => {
    console.log("CLICKED!");
    openModal(MyModal, {
      onSubmit: () => {
        console.log("로직 처리...");
      },
    });
  };

  // MODAL TEST -------------------------------------
  const onYes = () => {
    console.log("YES!");
    setIsOpen(false); // state 관리를 컴포넌트에서 하지 않는다. (context)
  };
  const onNo = () => {
    console.log("NO!");
    setIsOpen(false);
  };
  // MODAL TEST -------------------------------------

  const onClick2 = () => {
    console.log("OPENED!");
  };

  const onClick3 = () => {
    console.log("CLOSED!");
  };

  return (
    <>
      <Title>홈</Title>
      <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={true} onClick={handleClick}>
        <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
        <span>새로고침</span>
      </OneWayButton>
      <TwoWayButton text={"labelMd"} color={"keyWhite"} round={"md"}>
        <span onClick={onClick2}>선택가능</span>
        <Icon16 src={require("../../assets/icon/icon_close.png")} alt="삭제" onClick={onClick3} />
      </TwoWayButton>
      <ul>
        <CardSimple />
      </ul>
      {/*<MyModal isOpen={isOpen} onNo={onNo} onYes={onYes} />*/}
    </>
  );
};

export default Index;

const Title = styled.h2`
  ${({ theme }) => theme.TEXT.headerMd};
`;
