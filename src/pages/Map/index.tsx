import React, { useContext, useEffect, useRef, useState } from "react";
import { OneWayButton } from "../../components/Button";
import { Icon16 } from "../../style/style";
import TestModal from "../../components/modal/TestModal";
import { ModalsDispatchContext } from "../../context/ModalsProvider";
import MyModal from "../../components/modal/MyModal";
import useModals from "../../hook/useModal";
import styled from "styled-components";
import Card from "../../components/Card";
import IMappin from "../../assets/icon/icon_mappin_green.png";
import IGPS from "../../assets/icon/icon_crosshair.png";
import IMyLocation from "../../assets/icon/icon_myGPS.png";
import "../../style/naverMap.css";
import { MAP_LIST } from "../../mockData";

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
    latitude: 37.3595704,
    longitude: 127.105399,
  });
  const [components, setComponents] = useState<any[]>([]);

  // 0. 내 위치
  useEffect(() => {
    getMyLocation();
  }, []);

  // 0-1. 내 위치 찾기
  const getMyLocation = () => {
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
  };

  // 1. 지도
  useEffect(() => {
    setMapInitial();
  }, []);

  // 1-1. 지도 생성
  const setMapInitial = () => {
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 14,
      minZoom: 8,
    };
    const map = new naver.maps.Map(mapEl.current, mapOptions);
    const marker = new naver.maps.Marker({
      position: location,
      map,
      icon: IMyLocation,
    });
    return [map, location];
  };

  // 2. 지도 이벤트
  useEffect(() => {
    const [map, location]: any = setMapInitial();

    // 2-1. 커스텀 버튼을 생성한다.
    naver.maps.Event.once(map, "init", () => {
      // 내 위치로 이동
      const myGPS = new naver.maps.CustomControl(
        `
            <button type="button" class="btn_gps"><img src="${IGPS}" alt='내위치' class="icon_gps"/></button>
          `,
        {
          position: naver.maps.Position.TOP_RIGHT,
        },
      );
      myGPS.setMap(map);
      naver.maps.Event.addDOMListener(myGPS.getElement(), "click", () => {
        setMapInitial();
      });

      // 2-2. 현재 지도에서 주변 마커 표시
      showMarkersHere(map);
      // TODO - 내 위치에서 검색
    });
  }, [myLocation]);

  // 3. 지도 idle 이벤트 적용
  const showMarkersHere = (map: naver.maps.Map) => {
    const markers = getMarkerList(map);
    naver.maps.Event.addListener(map, "idle", function () {
      showMarkers(map, markers);
    });
  };

  // 3-1. 여러개의 마커 생성 (현재위치 기준 map 을 새로 랜더링)
  const getMarkerList = (map: naver.maps.Map) => {
    return MAP_LIST.map((item) => {
      const location = new naver.maps.LatLng(item.latitude, item.longitude);
      const marker = new naver.maps.Marker({
        position: location,
        map,
        icon: IMappin,
      });
      naver.maps.Event.addListener(marker, "click", (e) => {
        // TODO - 아이디값을 가지고 검색 or 각 item data 로 전달
        //  동일한 mappin id 선택 시 상세카드 제거
        setComponents([item]);
      });
      return marker;
    });
  };

  // 3-2. 지도에 조건부 마커 렌더링
  const showMarkers = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
    const bounds = map.getBounds();
    markers.map((marker: any) => {
      const position = marker.getPosition();
      if (bounds.hasPoint(position)) {
        marker.setMap(map);
      } else {
        marker.setMap(null);
      }
    });
  };

  return (
    <MapWrapper>
      <div id="map" ref={mapEl} style={{ height: "100%" }}></div>
      {components.length > 0 &&
        components.map((item) => {
          const { id, title, img, way, recycle, contents } = item;
          return (
            <DetailCardWrapper key={id}>
              <Card id={id} title={title} img={img} way={way} recycle={recycle} contents={contents} />
            </DetailCardWrapper>
          );
        })}
    </MapWrapper>
  );
};

export default Index;

const MapWrapper = styled.div`
  position: relative;
  height: calc(100vh - 170px);
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
