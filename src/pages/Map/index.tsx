import React, { useContext, useEffect, useRef, useState } from "react";
import { OneWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import TestModal from "../../components/modal/TestModal";
import { ModalsDispatchContext } from "../../context/ModalsProvider";
import MyModal from "../../components/modal/MyModal";
import useModals from "../../hook/useModal";
import styled from "styled-components";

const Index = () => {
  // MODAL
  // const [modal, setModal] = useState(false);
  // const { openModal } = useModals();
  //
  // const onClick = () => {
  //   console.log("OPEN!!");
  //   setModal(true);
  // };
  //
  // const onSubmit = () => {
  //   console.log("SUBMIT!!");
  //   const arrE = [];
  //   console.log(!!arrE.length);
  //   setModal(false);
  // };
  //
  // const onClose = () => {
  //   console.log("CLOSED!!");
  //   setModal(false);
  // };
  //
  // const FnModal = () => {
  //   return <TestModal opened={modal} onClose={onClose} onSubmit={onSubmit} children={<>안녕하세요 모달입니다.</>} />;
  // };
  //
  // const onClickContext = () => {
  //   openModal(MyModal, {
  //     onClose: () => {},
  //   });
  // };
  //
  // return (
  //   <>
  //     <OneWayButton text={"label12"} color={"keyWhite"} round={"md"} border={true} onClick={onClickContext}>
  //       <Icon16 src={require("../../assets/icon/icon_home.png")} alt="아이콘" />
  //       <span>모달열기</span>
  //     </OneWayButton>
  //     {FnModal()}
  //   </>
  // );

  // NAVER MAP
  const mapEl = useRef<any>();
  const [myLocation, setMyLocation] = useState<any>();

  // 내 위치 찾기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  // 지도 그리기
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (typeof myLocation !== "string") {
        const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
        const mapOptions = {
          center: location,
          zoom: 14,
        };
        const map = new naver.maps.Map(mapEl.current, mapOptions);
        new naver.maps.Marker({
          position: location,
          map,
        });
      }
    } else {
      const location = new naver.maps.LatLng(37.2755704, 127.042399);
      const mapOptions = {
        center: location,
        zoom: 14,
      };
      const map = new naver.maps.Map(mapEl.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, [myLocation]);

  return (
    <MapWrapper>
      <div ref={mapEl} style={{ height: "100%" }}></div>
    </MapWrapper>
  );
};

export default Index;

const MapWrapper = styled.div`
  height: 400px;
`;
