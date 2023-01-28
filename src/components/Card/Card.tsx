import React, { useEffect, useState } from "react";
import { Icon16, Img109 } from "../../style/style";
import { OneWayButton } from "../Button/Button";
import { CardProps } from "../../types/type";
import ILike from "../../assets/icon/icon_like.png";
import ILikeE from "../../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../../util/handleLikes";
import RecycleList from "../RecycleList/RecycleList";
import { useNavigate } from "react-router-dom";
import * as S from "./Card.style";

const Card = (props: CardProps) => {
  const { title, way, contents, recycle, img, id, reload } = props;
  const recycleList = recycle.slice(0, 3);
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const result = onCheckLikes(id);
    if (result) {
      setLike(true);
    }
  }, []);

  const onDetail = () => {
    navigate(`/detail?title=${title}`);
  };

  const onLike = () => {
    onChangeLikes(id);
    setLike((prev) => !prev);
    if (reload) {
      window.location.reload();
    }
  };

  return (
    <S.Li>
      <button type="button" onClick={onDetail}>
        <Img109 src={img} alt="기업 상세조회" />
      </button>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <strong>{title}</strong>
          <OneWayButton text={"label10"} color={"keyWhite"} round={"md"} clickable={true}>
            {way}
          </OneWayButton>
        </S.TitleWrapper>
        <RecycleList recycleList={recycleList} />
        <S.TxtContents>{contents}</S.TxtContents>
      </S.ContentWrapper>
      <S.LikeBtn type="button" onClick={onLike}>
        <Icon16 src={like ? ILike : ILikeE} alt="좋아요" />
      </S.LikeBtn>
    </S.Li>
  );
};

export default Card;
