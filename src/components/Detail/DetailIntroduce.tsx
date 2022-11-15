import React from "react";
import { DetailTitleH3, DetailWrapper, Img24 } from "../../style/style";
import styled from "styled-components";
import IFacebook from "../../assets/icon/icon_facebook.png";
import IYoutube from "../../assets/icon/icon_youtube.png";
import IInstagram from "../../assets/icon/icon_insta.png";
import ITiktok from "../../assets/icon/icon_tiktok.png";
import IBlog from "../../assets/icon/icon_blog.png";
import { useNavigate } from "react-router-dom";

type SnsDirection = {
  src: string;
  alt: string;
  path: string;
};

interface ImgList extends Array<SnsDirection> {}

// 또는 다른 형태
// interface ImgList {
//   imgList : SnsDirection[];
// }

const DetailIntroduce = () => {
  const navigate = useNavigate();

  // TODO - 객체 배열 형태로 만들어서 사용
  //  path 는 서버에서 받아서 할당
  //  받아온 리스트 중 등록되지 않은 sns 는 표시 X?
  const imgList: ImgList = [
    {
      src: IBlog,
      alt: "블로그",
      path: "https://naver.com",
    },
    {
      src: IFacebook,
      alt: "페이스북",
      path: "https://facebook.com",
    },
    {
      src: IInstagram,
      alt: "인스타그램",
      path: "https://instagram.com",
    },
    {
      src: IYoutube,
      alt: "유튜브",
      path: "https://youtube.com",
    },
    {
      src: ITiktok,
      alt: "틱톡",
      path: "https://tiktok.com",
    },
  ];

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
              <a href={img.path} target="_blank">
                <Img24 src={img.src} alt={img.alt} />
              </a>
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
