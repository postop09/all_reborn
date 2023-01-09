import React, { Ref, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import IMappin from "../../assets/icon/icon_mappin_green.png";
import IGPS from "../../assets/icon/icon_crosshair.png";
import IMyLocation from "../../assets/icon/icon_myGPS.png";
import { MAP_LIST } from "../../mockData";
import { MapCards } from "../../types/type";
import "../../style/naverMap.css";

type Location = {
  latitude: number;
  longitude: number;
};

const Index = () => {
  // NAVER MAP
  const mapEl = useRef<any>();
  const [myLocation, setMyLocation] = useState<Location>({
    latitude: 37.3595704,
    longitude: 127.105399,
  });
  const [components, setComponents] = useState<MapCards[]>([]);

  useEffect(() => {
    getMyLocation();
    setMapInitial();
  }, []);

  // 0-1. 내 위치 찾기
  const getMyLocation = () => {
    const success = (position: GeolocationPosition) => {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const error = (err: GeolocationPositionError) => {
      alert(err.message);
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  };

  // 1-1. 지도 생성
  const setMapInitial = (): [naver.maps.Map, naver.maps.LatLng] => {
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
      center: location,
      zoom: 14,
      minZoom: 8,
      scaleControl: false,
      mapDataControl: false,
    };
    const map = new naver.maps.Map(mapEl.current, mapOptions);
    const marker = new naver.maps.Marker({
      position: location,
      map,
      icon: IMyLocation,
    });
    return [map, location];
  };

  // TODO - 내 위치로 이동: 모바일에서 제대로 작동하지 않음. (웹에서 위치서비스 허용 후에는 잘 작동된다. (?))
  // 2. 지도 이벤트
  useEffect(() => {
    const [map] = setMapInitial();

    // 2-1. 내 위치로 이동 커스텀 버튼 생성
    naver.maps.Event.once(map, "init", () => {
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
        getMyLocation();
      });

      // 2-2. 현재 지도에서 주변 마커 표시
      showMarkersHere(map);
    });
  }, [myLocation]);

  // 3. 지도 idle 이벤트 적용
  const showMarkersHere = (map: naver.maps.Map) => {
    const markers = getMarkerList(map);
    naver.maps.Event.addListener(map, "idle", () => {
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
        setComponents([item]);
      });
      return marker;
    });
  };

  // 3-2. 지도에 조건부 마커 렌더링
  const showMarkers = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
    const bounds = map.getBounds();
    markers.map((marker) => {
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
  height: calc(100vh - 135px);
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
