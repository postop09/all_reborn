import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon16, Img} from "../style/style";
import {OneWayButton} from "./Button";
import {CardProps} from "../util/type";

const Card = (props: CardProps) => {
  const {title, way, contents, recycle, img, id} = props;
  const recycleList = recycle.slice(0, 3);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("likes");
    if (storage) {
      const arr = JSON.parse(storage);
      const test = arr.filter((item: number) => item === id);
      if (test.length > 0) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }, []);

  // 상세조회
  const onDetail = () => {
    console.log("Move Detail!");
  };

  // 좋아요
  const onLike = () => {
    setLike((prev) => !prev);
    const storage = localStorage.getItem("likes");
    if (!storage) {
      localStorage.setItem("likes", JSON.stringify([id]));
    } else {
      const arr = JSON.parse(storage);
      const test = arr.filter((item: number) => item === id);
      if (test.length > 0) {
        const filter = arr.filter((item: number) => item !== id);
        localStorage.setItem("likes", JSON.stringify(filter));
      } else {
        arr.push(id);
        localStorage.setItem("likes", JSON.stringify(arr));
      }
    }
  };

  return (
    <Li>
      <ImgWrapper type="button" onClick={onDetail}>
        <Img src="" alt="이미지"/>
      </ImgWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <strong>{title}</strong>
          <OneWayButton text={"labelSm"} color={"keyWhite"} round={"md"} clickable={true}>{way}</OneWayButton>
        </TitleWrapper>
        <RecycleList>
          {
            recycleList.map((item, index) => {
              return (
                <RecycleItem key={index}>{item}</RecycleItem>
              )
            })
          }
        </RecycleList>
        <TxtContents>{contents}</TxtContents>
      </ContentWrapper>
      <LikeBtn type="button" onClick={onLike}>
        <Icon16 src={require(`../assets/icon/${like ? "icon_like.png" : "icon_like_empty.png"}`)} alt="좋아요"/>
      </LikeBtn>
    </Li>
  );
};

export default Card;

const Li = styled.li`
  display: flex;
  border: 1px solid gray;
  border-radius: 4px;
  width: 343px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`

const ImgWrapper = styled.button`
  padding: 0;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 4px;
  word-break: keep-all;
`

const RecycleList = styled.ul`
  display: flex;
  ${({theme}) => theme.TEXT.bodyMd}
`

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
`

const TxtContents = styled.p`
  ${({theme}) => theme.TEXT.bodyMd}
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

const LikeBtn = styled.button`
  height: fit-content;
  margin-top: auto;
`