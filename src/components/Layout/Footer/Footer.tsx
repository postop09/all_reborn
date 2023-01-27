import React, { useEffect, useState } from "react";
import * as enums from "../../../const/routes";
import IHome from "../../../assets/icon/icon_home.png";
import IHomeE from "../../../assets/icon/icon_home_empty.png";
import IMap from "../../../assets/icon/icon_mappin.png";
import IMapE from "../../../assets/icon/icon_mappin_empty.png";
import ILikes from "../../../assets/icon/icon_heart_black.png";
import ILikesE from "../../../assets/icon/icon_heart_empty.png";
import { useNavigate } from "react-router-dom";
import * as S from "./Footer.style";

const Footer = () => {
  const { ROUTES } = enums;
  const navigate = useNavigate();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPathName(pathName);
  }, [window.location.pathname]);

  return (
    <S.FooterWrapper>
      <nav>
        <S.Ul>
          <li>
            <button type="button" onClick={() => navigate(`${ROUTES.LIST}?title=기업목록`)}>
              <S.ImgNav src={pathName === ROUTES.LIST ? IHome : IHomeE} alt="" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate(ROUTES.MAP)}>
              <S.ImgNav src={pathName === ROUTES.MAP ? IMap : IMapE} alt="" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate(`${ROUTES.LIKES}?title=좋아요`)}>
              <S.ImgNav src={pathName === ROUTES.LIKES ? ILikes : ILikesE} alt="" />
            </button>
          </li>
        </S.Ul>
      </nav>
    </S.FooterWrapper>
  );
};

export default Footer;
