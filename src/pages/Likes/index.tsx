import React from "react";
import INoLikes from "../../assets/image/img_noLikes.png";
import CardSimple from "../../components/CardSimple/CardSimple";
import * as S from "./index.style";
import useGetLikeList from "../Home/LikeList/hook/useGetLikeList";
import CategoryWrapper from "../../components/CategoryWrapper/CategoryWrapper";

const Index = () => {
  const {list} = useGetLikeList();

  return (
    <S.Wrapper>
      <S.HiddenTitle>기업목록</S.HiddenTitle>
      <CategoryWrapper listLength={list.length} />
      {list.length > 0 ? (
        <S.Ul>
          {list.map((item) => {
            return <CardSimple key={item.id} id={item.id} img={item.img} name={item.title} likable={true} />;
          })}
        </S.Ul>
      ) : (
        <S.TxtWrapper>
          <img src={INoLikes} alt="" />
          <span>좋아요를 누른 기업이 없습니다.</span>
          <span>올리본에 등록되길 원하는 기업이 있으시면,</span>
          <span>팀 올리본으로 연락주세요!</span>
        </S.TxtWrapper>
      )}
    </S.Wrapper>
  );
};

export default Index;
