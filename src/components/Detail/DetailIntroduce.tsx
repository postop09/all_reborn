import React from "react";
import { DetailTitleH3, DetailWrapper, Img24 } from "../../style/style";
import styled from "styled-components";
import IFacebook from "../../assets/icon/icon_facebook.png";
import IYoutube from "../../assets/icon/icon_youtube.png";
import IInstagram from "../../assets/icon/icon_insta.png";
import ITiktok from "../../assets/icon/icon_tiktok.png";
import IBlog from "../../assets/icon/icon_blog.png";

type SnsDirection = {
  src: string;
  alt: string;
  path: string;
};

const DetailIntroduce = () => {
  const imgList = [IBlog, IFacebook, IInstagram, IYoutube, ITiktok];

  // TODO - 객체 배열 형태로 만들어서 사용
  // const imgObject: SnsDirection = [{
  //   src: IBlog,
  //   alt: "blog",
  //   path: "https://naver.com",
  // }];

  return (
    <DetailWrapper>
      <DetailTitleH3>
        기업명<HiddenTxt> 소개</HiddenTxt>
      </DetailTitleH3>
      <Contents>
        하나둘셋넷다섯여섯일곱여덟아홉열 하나 둘셋넷다섯여섯일곱여덟아홉열 하나둘 셋넷다섯여섯일곱여덟아홉열 하나둘셋
        넷다섯여섯일곱여덟아홉열 하나둘셋넷 다섯여섯일곱여덟아홉열 하나둘셋넷다섯 여섯일곱여덟아홉열 하나둘셋넷다섯여섯
        일곱여덟아홉열 하나둘셋넷다섯여섯일곱 여덟아홉열 하나둘 백오십
      </Contents>
      <Ul>
        {imgList.map((img, index) => {
          return (
            <li key={index}>
              <button type="button">
                <Img24 src={img} alt="SNS" />
              </button>
            </li>
          );
        })}
      </Ul>
    </DetailWrapper>
  );
};

export default DetailIntroduce;

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
