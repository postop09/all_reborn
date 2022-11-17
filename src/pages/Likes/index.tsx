import React from "react";
import { Icon16 } from "../../style/style";
import { TwoWayButton } from "../../components/Button";

const Index = () => {
  const onClick2 = () => {
    console.log("LIKE!");
  };

  const onClick3 = () => {
    console.log("CANCEL!");
  };

  return (
    <>
      <TwoWayButton text={"label12"} color={"keyWhite"} round={"md"}>
        <span onClick={onClick2}>좋아요</span>
        <Icon16 src={require("../../assets/icon/icon_close.png")} alt="삭제" onClick={onClick3} />
      </TwoWayButton>
    </>
  );
};

export default Index;
