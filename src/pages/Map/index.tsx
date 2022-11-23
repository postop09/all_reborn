import React, { useContext, useEffect, useRef, useState } from "react";
import { OneWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import TestModal from "../../components/modal/TestModal";
import { ModalsDispatchContext } from "../../context/ModalsProvider";
import MyModal from "../../components/modal/MyModal";
import useModals from "../../hook/useModal";
import styled from "styled-components";

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

  // NAVER MAP
  const mapEl = useRef();

  useEffect(() => {
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const map = new naver.maps.Map(mapEl.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  // return (
  //   <>
  //     <OneWayButton text={"label12"} color={"keyWhite"} round={"md"} border={true} onClick={onClickContext}>
  //       <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
  //       <span>모달열기</span>
  //     </OneWayButton>
  //     {FnModal()}
  //   </>
  // );

  return (
    <MapWrapper>
      <div ref={mapEl} style={{ minHeight: "400px" }}></div>
    </MapWrapper>
  );
};

export default Index;

const MapWrapper = styled.div`
  height: 100%;
`;
