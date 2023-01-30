import React from "react";
import CardSimple from "../../../components/CardSimple/CardSimple";
import { TitleH3 } from "../../../style/style";
import * as S from "./LikeList.style";
import useGetLikeList from "./hook/useGetLikeList";

const LikesList = () => {
  const {list} = useGetLikeList();

  const NoLikeList = () => {
    return (
      <S.TxtWrapper>
        <strong>😳 이런! 아직 좋아하는 기업이 없어요!</strong>
        <span>🔍 내가 좋아하는 기업을 찾아서</span>
        <span>❤️ 기업의 하트를 누르고,</span>
        <span>💨 좋아하는 기업을 빠르게 만나보세요!</span>
      </S.TxtWrapper>
    )
  }

  const HasLikeList = () => {
    return (
      <S.Ul>
        {list.map((item, index) => {
          const { id, img, title } = item;
          return <CardSimple key={index} id={id} img={img} name={title} likable={true} />;
        })}
      </S.Ul>
    )
  }

  return (
    <section>
      <TitleH3>내가 좋아하는 기업</TitleH3>
      {list.length === 0 ? <NoLikeList /> : <HasLikeList />}
    </section>
  );
};

export default LikesList;
