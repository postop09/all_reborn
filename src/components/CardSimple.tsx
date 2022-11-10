import React from "react";
import styled from "styled-components";
import { Icon16, ImgCard } from "../style/style";
import ILike from "../assets/icon/icon_like.png";
import ILikeE from "../assets/icon/icon_like_empty.png";

const CardSimple = () => {
  return (
    <Li>
      <button type="button">
        <Img src="" alt="기업 상세조회" />
      </button>
      <LikeBtn type="button">
        <Icon16 src={ILikeE} alt="좋아요" />
      </LikeBtn>
    </Li>
  );
};

export default CardSimple;

const Li = styled.li`
  display: inline-block;
  position: relative;
`;

const Img = styled(ImgCard)`
  border-radius: ${({ theme }) => theme.ROUND.sm};
`;

const LikeBtn = styled.button`
  position: absolute;
  bottom: 6px;
  right: 8px;
`;
