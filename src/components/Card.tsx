import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon16, Img109 } from "../style/style";
import { OneWayButton } from "./Button";
import { CardProps } from "../util/type";
import ILike from "../assets/icon/icon_like.png";
import ILikeE from "../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../util/handleLikes";
import RecycleList from "./RecycleList";
import { useNavigate } from "react-router-dom";

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

  // 상세조회
  const onDetail = () => {
    // TODO - 선택한 항목의 id 값으로 API 호출이 성공하면 이동
    navigate(`/detail?title=${title}`);
  };

  // 좋아요
  const onLike = () => {
    onChangeLikes(id);
    setLike((prev) => !prev);
    if (reload) {
      window.location.reload();
    }
  };

  return (
    <Li>
      <button type="button" onClick={onDetail}>
        <Img109 src={img} alt="기업 상세조회" />
      </button>
      <ContentWrapper>
        <TitleWrapper>
          <strong>{title}</strong>
          <OneWayButton text={"label10"} color={"keyWhite"} round={"md"} clickable={true}>
            {way}
          </OneWayButton>
        </TitleWrapper>
        <RecycleList recycleList={recycleList} />
        <TxtContents>{contents}</TxtContents>
      </ContentWrapper>
      <LikeBtn type="button" onClick={onLike}>
        <Icon16 src={like ? ILike : ILikeE} alt="좋아요" />
      </LikeBtn>
    </Li>
  );
};

export default Card;

const Li = styled.li`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 4px;
  min-width: 280px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5px 4px 12.5px 8px;
  word-break: keep-all;
`;

const TxtContents = styled.p`
  ${({ theme }) => theme.TEXT.body14}
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const LikeBtn = styled.button`
  height: fit-content;
  margin: auto 8px 4px auto;
`;
