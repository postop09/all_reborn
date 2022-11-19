import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon16, Img109 } from "../style/style";
import ILike from "../assets/icon/icon_like.png";
import ILikeE from "../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../util/handleLikes";
import {useNavigate} from "react-router-dom";

type CardSimpleProps = {
  id: number;
  img: string;
  name: string;
  likable?: boolean;
};

const CardSimple = (props: CardSimpleProps) => {
  // TODO - 구분자값으로 기업/제품 분리
  const navigate = useNavigate();
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

  // TODO - props 로 구분자값 내려주기
  const onDetail = () => {
    navigate("/detail");
  }

  return (
    <Li>
      <Wrapper>
        <button type="button" onClick={() => onDetail()}>
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

const Img = styled(Img109)`
  border-radius: ${({ theme }) => theme.ROUND.sm};

  @media screen and (max-width: 380px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 415px) {
    width: 120px;
    height: 120px;
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
