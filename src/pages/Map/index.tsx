import React, { useState } from "react";
import { OneWayButton, TwoWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import useModals from "../../hook/useModal";
import MyModal from "../../components/modal/MyModal";

const Index = () => {
  // MODAL TEST -------------------------------------
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
  const onYes = () => {
    console.log("YES!");
    setIsOpen(false); // state 관리를 컴포넌트에서 하지 않는다. (context)
  };
  const onNo = () => {
    console.log("NO!");
    setIsOpen(false);
  };
  // MODAL TEST -------------------------------------

  return (
    <>
      <OneWayButton text={"labelMd"} color={"keyWhite"} round={"md"} border={true} onClick={handleClick}>
        <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
        <span>모달열기</span>
      </OneWayButton>
    </>
  );
};

export default Index;
