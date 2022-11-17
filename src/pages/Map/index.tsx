import React, { useContext, useState } from "react";
import { OneWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import TestModal from "../../components/modal/TestModal";
import { ModalsDispatchContext } from "../../context/ModalsProvider";
import MyModal from "../../components/modal/MyModal";
import useModals from "../../hook/useModal";

const Index = () => {
  const [modal, setModal] = useState(false);
  const { openModal } = useModals();

  const onClick = () => {
    console.log("OPEN!!");
    setModal(true);
  };

  const onSubmit = () => {
    console.log("SUBMIT!!");
    const arrE = [];
    console.log(!!arrE.length);
    setModal(false);
  };

  const onClose = () => {
    console.log("CLOSED!!");
    setModal(false);
  };

  const FnModal = () => {
    return <TestModal opened={modal} onClose={onClose} onSubmit={onSubmit} children={<>안녕하세요 모달입니다.</>} />;
  };

  const onClickContext = () => {
    openModal(MyModal, {
      onClose: () => {},
    });
  };

  return (
    <>
      <OneWayButton text={"label12"} color={"keyWhite"} round={"md"} border={true} onClick={onClickContext}>
        <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
        <span>모달열기</span>
      </OneWayButton>
      {FnModal()}
    </>
  );
};

export default Index;
