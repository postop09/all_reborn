import React from "react";
import { DetailTitleH3, DetailWrapper, Img24 } from "../../style/style";
import styled from "styled-components";
import IFacebook from "../../assets/icon/icon_facebook.png";
import IYoutube from "../../assets/icon/icon_youtube.png";
import IInstagram from "../../assets/icon/icon_insta.png";
import ITiktok from "../../assets/icon/icon_tiktok.png";
import IBlog from "../../assets/icon/icon_blog.png";
import { useNavigate } from "react-router-dom";

const CompIntro = () => {
  return (
    <DetailWrapper>
      <DetailTitleH3>
        제품명<HiddenTxt> 소개</HiddenTxt>
      </DetailTitleH3>
      <Contents>
        불어라 불어라 겨울바람아. 너는 배은망덕한 사람만큼이나 무정하구나. 인생이란 누구나 한 번쯤 시도해 볼 만한
        것이다. 아무리 중대한 실수를 저질렀더라도 항상 또다른 기회는 있기 마련이다. 우리가 실패라 부르는 것은 추락하는
        것이 아니라 추락한 채로 있는 것이다.
      </Contents>
    </DetailWrapper>
  );
};

export default CompIntro;

const HiddenTxt = styled.span`
  ${({ theme }) => theme.TEXT.hide};
`;

const Contents = styled.p`
  word-break: keep-all;
`;

const Ul = styled.ul`
  margin-top: 12px;
  display: flex;
  column-gap: 8px;
`;
