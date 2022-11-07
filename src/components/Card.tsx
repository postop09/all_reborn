import React, {useState} from 'react';
import styled from "styled-components";
import {Icon16} from "../style/style";
import {OneWayButton} from "./Button";

type Card = {
  title: string;
  img: string;
  way: string;
  recycle: string[];
  contents: string;
}

const Card = (props: Card) => {
  const {title, way, contents, recycle, img} = props;
  const recycleList = recycle.slice(0, 3);
  const [like, setLike] = useState(false);

  // 상세조회
  const onDetail = () => {
    console.log("Move Detail!");
  };

  // 좋아요
  const onLike = () => {
    console.log("Like!");
    setLike((prev) => !prev);
  };

  return (
    <Wrapper>
      <ImgWrapper type="button" onClick={onDetail}>
        <Img src={require(`../assets/icon/${img}`)} alt="이미지"/>
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
        <TxtContents>{contents}당신 그대로의 모습으로 미움받는 것이 당신답지 못한 모습으로 사랑받는 것보다 낫다. 나는 자연에 가까워졌고 이제 이 세상이 주는 아름다움에 감사할 수 있게 되었다.</TxtContents>
      </ContentWrapper>
      <LikeBtn type="button" onClick={onLike}>
        <Icon16 src={require(`../assets/icon/${like ? "icon_like.png" : "icon_like_empty.png"}`)} alt="좋아요"/>
      </LikeBtn>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  display: flex;
  border: 1px solid black;
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

const Img = styled.img`
  width: 109px;
  height: 109px;
`