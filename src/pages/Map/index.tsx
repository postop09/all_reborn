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
  const TEST = [
    {
      id: 1,
      latitude: 37.1755704,
      longitude: 127.042399,
    },
    {
      id: 2,
      latitude: 37.1955704,
      longitude: 127.242399,
    },
    {
      id: 3,
      latitude: 37.2555704,
      longitude: 127.142399,
    },
    {
      id: 4,
      latitude: 37.3755704,
      longitude: 127.042399,
    },
    {
      id: 5,
      latitude: 37.3955704,
      longitude: 127.142399,
    },
    {
      id: 6,
      latitude: 37.3955704,
      longitude: 127.042399,
    },
    {
      id: 7,
      latitude: 37.3955704,
      longitude: 127.092399,
    },
    {
      id: 8,
      latitude: 37.3955704,
      longitude: 127.242399,
    },
    {
      id: 9,
      latitude: 37.3955704,
      longitude: 127.942399,
    },
    {
      id: 10,
      latitude: 37.3955704,
      longitude: 127.542399,
    },
  ];

  // 0. 내 위치를 찾는다.
  useEffect(() => {
    getMyLocation();
  }, []);

  useEffect(() => {
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 14,
      minZoom: 8,
    };
    const map = new naver.maps.Map(mapEl.current, mapOptions);

    // 1-1. 내 위치를 기본적으로 표시한다.
    const marker = new naver.maps.Marker({
      position: location,
      map,
      icon: IMyLocation,
    });
  }, []);

  // 1. 내 위치를 기준으로 지도를 연다.
  useEffect(() => {
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 14,
      minZoom: 8,
    };
    const map = new naver.maps.Map(mapEl.current, mapOptions);

    // 1-1. 내 위치를 기본적으로 표시한다.
    const marker = new naver.maps.Marker({
      position: location,
      map,
      icon: IMyLocation,
    });

    // 1-2. 커스텀 버튼을 생성한다.
    // TODO - 리랜더링 시 재생성 되는 문제(그림자가 점점 짙어짐. 1번만 생성되도록 조치)
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

      // 내 위치에서 검색
      const storeNearByGPS = new naver.maps.CustomControl(
        `
            <button type="button" class="btn_gps btn_here">여기서 찾기</button>
          `,
        {
          position: naver.maps.Position.TOP_RIGHT,
        },
      );

      storeNearByGPS.setMap(map);
      myGPS.setMap(map);

      naver.maps.Event.addDOMListener(storeNearByGPS.getElement(), "click", () => {
        // getStoreList(map);
        getList(map);
      });
      naver.maps.Event.addDOMListener(myGPS.getElement(), "click", () => {
        map.setCenter(location);
      });
    });
  }, [myLocation]);

  // 0-1. 내 위치 찾기
  const getMyLocation = () => {
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
  };

  // 여러개의 마커 생성 (현재위치 기준 map 을 새로 랜더링)
  const getStoreList = (map: any) => {
    TEST.map((item) => {
      const location = new naver.maps.LatLng(item.latitude, item.longitude);
      const marker = new naver.maps.Marker({
        position: location,
        map,
        icon: IMappin,
      });

      // TODO - mappin 재생성 방지
      // const bounds = map.getBounds();
      // if (bounds.hasPoint(location)) {
      //   naver.maps.Event.addListener(marker, "click", (e) => {
      //     // setComponent((prev) => !prev);
      //     console.log("marker event!!", item.id);
      //   });
      //   marker.setMap(map);
      // } else {
      //   marker.setMap(null);
      // }
    });
  };

  const getList = (map: any) => {
    const markers = TEST.map((item) => {
      const location = new naver.maps.LatLng(item.latitude, item.longitude);
      const marker = new naver.maps.Marker({
        position: location,
        map,
        icon: IMappin,
      });
      return marker;
    });
    console.log(markers);
    return markers;
  };

  const showMarkers = (map: any, markers: any) => {
    const bounds = map.getBounds();
    markers.map((marker: any) => {
      const position = marker.getPosition();
      if (bounds.hasPoint(position)) {
        naver.maps.Event.addListener(marker, "click", (e) => {
          // setComponent((prev) => !prev);
          console.log("marker event!!", marker.id);
        });
        show(map, marker);
      } else {
        hide(map, marker);
      }
    });
  };

  const show = (map: any, marker: any) => {
    console.log(marker.getMap());
    if (marker.getMap()) return;
    marker.setMap(map);
  };

  const hide = (map: any, marker: any) => {
    if (!marker.getMap()) return;
    marker.setMap(null);
  };

  return (
    <MapWrapper>
      <div id="map" ref={mapEl} style={{ height: "100%" }}></div>
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
