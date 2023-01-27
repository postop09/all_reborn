import styled from "styled-components";

export const MapWrapper = styled.div`
  position: relative;
  height: calc(100vh - 135px);
`;

export const DetailCardWrapper = styled.div`
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