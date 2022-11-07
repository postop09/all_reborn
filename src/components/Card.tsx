import React from 'react';
import styled from "styled-components";
import {Icon16} from "../style/style";
import {OneWayButton} from "./Button";

const Card = () => {
  const recycleList = ["플라스틱", "캔", "비닐", "건전지", "종이"];

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={require("../assets/icon/icon_home_empty.png")} alt="이미지"/>
      </ImgWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <strong>제목</strong>
          <OneWayButton text={"labelSm"} color={"keyWhite"} round={"md"}>수거방법</OneWayButton>
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
        <TxtContents>당신 그대로의 모습으로 미움받는 것이 당신답지 못한 모습으로 사랑받는 것보다 낫다. 나는 자연에 가까워졌고 이제 이 세상이 주는 아름다움에 감사할 수 있게 되었다.</TxtContents>
      </ContentWrapper>
      <LikeBtn>
        <Icon16 src={require("../assets/icon/icon_heart_red.png")} alt="좋아요"/>
      </LikeBtn>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  display: flex;
  border: 1px solid black;
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
    content: "·";
    margin: 0 1px;
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
  width: 106px;
  height: 106px;
`