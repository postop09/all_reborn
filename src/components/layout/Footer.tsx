import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as enums from "../../const/enums";
import IHome from "../../assets/icon/icon_home.png";
import IHomeE from "../../assets/icon/icon_home_empty.png";
import IMap from "../../assets/icon/icon_mappin_white.png";
import IMapE from "../../assets/icon/icon_mappin_empty.png";
import ILikes from "../../assets/icon/icon_heart_black.png";
import ILikesE from "../../assets/icon/icon_heart_empty.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { ROUTES } = enums;
  const navigate = useNavigate();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPathName(pathName);
  }, [window.location.pathname]);

  return (
    <FooterWrapper>
      <nav>
        <Ul>
          <li>
            <button type="button" onClick={() => navigate("/")}>
              <ImgNav src={pathName === ROUTES.HOME ? IHome : IHomeE} alt="" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate("/map")}>
              <ImgNav src={pathName === ROUTES.MAP ? IMap : IMapE} alt="" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate("/likes")}>
              <ImgNav src={pathName === ROUTES.LIKES ? ILikes : ILikesE} alt="" />
            </button>
          </li>
        </Ul>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 428px;
  box-shadow: 0px -5px 7px 2px #00000040;
  border-top-left-radius: ${({ theme }) => theme.ROUND.md};
  border-top-right-radius: ${({ theme }) => theme.ROUND.md};
  padding: 16px 0 24px;
  background: white;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const ImgNav = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;
