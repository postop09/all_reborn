import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon16, Img109 } from "../style/style";
import ILike from "../assets/icon/icon_like.png";
import ILikeE from "../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../util/handleLikes";

type CardSimpleProps = {
  id: number;
  img: string;
  name: string;
  likable?: boolean;
};

const CardSimple = (props: CardSimpleProps) => {
  const { id, img, name, likable } = props;
  const [like, setLike] = useState(false);

  useEffect(() => {
    const result = onCheckLikes(id);
    if (result) {
      setLike(true);
    }
  }, []);

  // 좋아요
  const onLike = () => {
    onChangeLikes(id);
    setLike((prev) => !prev);
  };

  return (
    <Li>
      <Wrapper>
        <button type="button">
          <Img src={img} alt="기업 상세조회" />
        </button>
        {likable && (
          <LikeBtn type="button" onClick={onLike}>
            <Icon16 src={like ? ILike : ILikeE} alt="좋아요" />
          </LikeBtn>
        )}
      </Wrapper>
      <CompanyName>{name}</CompanyName>
    </Li>
  );
};

export default CardSimple;

const Li = styled.li`
  display: inline-block;
`;

const Wrapper = styled.div`
  position: relative;
`;

// TODO - @media screen 380px 이하는 이미지 크기 조절
const Img = styled(Img109)`
  border-radius: ${({ theme }) => theme.ROUND.sm};

  @media screen and (max-width: 380px) {
    width: 100px;
    height: 100px;
  }
`;

const LikeBtn = styled.button`
  position: absolute;
  bottom: 6px;
  right: 8px;
`;

const CompanyName = styled.p`
  margin-top: 8px;
  text-align: center;
`;
