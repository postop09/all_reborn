import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon16, ImgCard } from "../style/style";
import { OneWayButton } from "./Button";
import { CardProps } from "../util/type";
import ILike from "../assets/icon/icon_like.png";
import ILikeE from "../assets/icon/icon_like_empty.png";
import { onChangeLikes, onCheckLikes } from "../util/handleLikes";

const Card = (props: CardProps) => {
  const { title, way, contents, recycle, img, id } = props;
  const recycleList = recycle.slice(0, 3);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const result = onCheckLikes(id);
    if (result) {
      setLike(true);
    }
  }, []);

  // 상세조회
  const onDetail = () => {
    console.log("Move Detail!");
  };

  // 좋아요
  const onLike = () => {
    onChangeLikes(id);
    setLike((prev) => !prev);
  };

  return (
    <Li>
      <ImgWrapper type="button" onClick={onDetail}>
        <ImgCard src={img} alt="기업 상세조회" />
      </ImgWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <strong>{title}</strong>
          <OneWayButton text={"labelSm"} color={"keyWhite"} round={"md"} clickable={true}>
            {way}
          </OneWayButton>
        </TitleWrapper>
        <RecycleList>
          {recycleList.map((item, index) => {
            return <RecycleItem key={index}>{item}</RecycleItem>;
          })}
        </RecycleList>
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
  width: 343px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const ImgWrapper = styled.button`
  padding: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5px 4px 12.5px 8px;
  word-break: keep-all;
`;

const RecycleList = styled.ul`
  display: flex;
  margin: 8px 0;
  ${({ theme }) => theme.TEXT.bodyMd}
`;

const RecycleItem = styled.li`
  &:not(li:last-child)::after {
    content: "";
    display: inline-block;
    border-radius: 100%;
    margin: 0 4px 2px;
    width: 4px;
    height: 4px;
    vertical-align: middle;
    background: #00000080;
  }
`;

const TxtContents = styled.p`
  ${({ theme }) => theme.TEXT.bodyMd}
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
