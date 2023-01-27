import React, { useEffect, useState } from "react";
import { Icon16, Img109 } from "../../style/style";
import ILike from "../../assets/icon/icon_like.png";
import ILikeE from "../../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../../util/handleLikes";
import { useNavigate } from "react-router-dom";
import * as S from "./CardSimple.style";

type CardSimpleProps = {
  id: number;
  img: string;
  name: string;
  likable?: boolean;
  type?: "company" | "product";
};

const CardSimple = (props: CardSimpleProps) => {
  const navigate = useNavigate();
  const { id, img, name, likable, type } = props;
  const [like, setLike] = useState(false);

  useEffect(() => {
    const result = onCheckLikes(id);
    if (result) {
      setLike(true);
    }
  }, []);

  const onLike = () => {
    onChangeLikes(id);
    setLike((prev) => !prev);
    window.location.reload();
  };

  const onDetail = () => {
    navigate(`/detail?title=${name}`, {
      state: type,
    });
  };

  return (
    <S.Li>
      <S.Wrapper>
        <button type="button" onClick={() => onDetail()}>
          <S.Img src={img} alt="기업 상세조회" />
        </button>
        {likable && (
          <S.LikeBtn type="button" onClick={onLike}>
            <Icon16 src={like ? ILike : ILikeE} alt="좋아요" />
          </S.LikeBtn>
        )}
      </S.Wrapper>
      <S.CompanyName>{name}</S.CompanyName>
    </S.Li>
  );
};

export default CardSimple;
