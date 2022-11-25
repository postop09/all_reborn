import React, { useContext, useEffect, useRef, useState } from "react";
import { OneWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import TestModal from "../../components/modal/TestModal";
import { ModalsDispatchContext } from "../../context/ModalsProvider";
import MyModal from "../../components/modal/MyModal";
import useModals from "../../hook/useModal";
import styled from "styled-components";
import Card from "../../components/Card";

type Location = {
  latitude: number;
  longitude: number;
};

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
  const [myLocation, setMyLocation] = useState<Location>({
    latitude: 37.2755704,
    longitude: 127.042399,
  });
  const [component, setComponent] = useState(false);

  // 내 위치 찾기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  // 현재위치 기준 지도 그리기
  useEffect(() => {
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 14,
    };
    const map = new naver.maps.Map(mapEl.current, mapOptions);
    const marker = new naver.maps.Marker({
      position: location,
      map,
    });

    const infoWindow = new naver.maps.InfoWindow({
      content: ['<div class="iw_inner">', "  <p>hello world!</p>", "  <p>안녕하세요 설명입니다.</p>", "</div>"].join(
        "",
      ),
    });

    // 클릭 이벤트
    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infoWindow.getMap()) {
        infoWindow.close();
        setComponent(false);
      } else {
        infoWindow.open(map, marker);
        setComponent(true);
      }
    });
  }, [myLocation]);

  return (
    <MapWrapper>
      <div ref={mapEl} style={{ height: "100%" }}></div>
      {component && (
        <DetailCardWrapper>
          <Card
            id={1234}
            title={"지도기업"}
            img={""}
            way={"차량"}
            recycle={["캔", "유리", "비닐"]}
            contents={"기업소개글입니다."}
          />
        </DetailCardWrapper>
      )}
    </MapWrapper>
  );
};

export default Index;

const MapWrapper = styled.div`
  position: relative;
  height: 500px;
`;

const DetailCardWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  z-index: 100;

  > li {
    box-shadow: 3px 4px 4px #0f221626;
  }
`;
