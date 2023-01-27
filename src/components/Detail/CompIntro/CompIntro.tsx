import React from "react";
import { DetailTitleH3, DetailWrapper, Img24 } from "../../../style/style";
import IFacebook from "../../../assets/icon/icon_facebook.png";
import IYoutube from "../../../assets/icon/icon_youtube.png";
import IInstagram from "../../../assets/icon/icon_insta.png";
import ITiktok from "../../../assets/icon/icon_tiktok.png";
import IBlog from "../../../assets/icon/icon_blog.png";
import * as S from "./CompIntro.style";

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

const CompIntro = () => {
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
        기업명<S.HiddenTxt> 소개</S.HiddenTxt>
      </DetailTitleH3>
      <S.Contents>
        불어라 불어라 겨울바람아. 너는 배은망덕한 사람만큼이나 무정하구나. 인생이란 누구나 한 번쯤 시도해 볼 만한
        것이다. 아무리 중대한 실수를 저질렀더라도 항상 또다른 기회는 있기 마련이다. 우리가 실패라 부르는 것은 추락하는
        것이 아니라 추락한 채로 있는 것이다.
      </S.Contents>
      <S.Ul>
        {imgList.map((img, index) => {
          return (
            <li key={index}>
              <a href={img.path} target="_blank">
                <Img24 src={img.src} alt={img.alt} />
              </a>
            </li>
          );
        })}
      </S.Ul>
    </DetailWrapper>
  );
};

export default CompIntro;
