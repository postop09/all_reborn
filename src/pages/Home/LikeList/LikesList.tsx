import React, { useEffect, useState } from "react";
import CardSimple from "../../../components/CardSimple/CardSimple";
import { TitleH3 } from "../../../style/style";
import * as mockData from "../../../mockData";
import { onGetLikes } from "../../../util/handleLikes";
import { CardProps } from "../../../types/type";
import * as S from "./LikeList.style";

interface List extends Array<CardProps> {}

const LikesList = () => {
  const [list, setList] = useState<List>([]);

  useEffect(() => {
    onFilterLikes();
  }, []);

  const onFilterLikes = () => {
    const storage = onGetLikes();
    const data = mockData.list;
    let newData: List = [];

    if (storage) {
      storage.map((likeId) => {
        const findItem = data.find((item) => item.id === likeId);
        if (findItem) {
          newData.push(findItem);
        }
      });
      setList(newData);
    }
    return;
  };

  if (list.length === 0) {
    return (
      <section>
        <TitleH3>내가 좋아하는 기업</TitleH3>
        <S.TxtWrapper>
          <strong>😳 이런! 아직 좋아하는 기업이 없어요!</strong>
          <span>🔍 내가 좋아하는 기업을 찾아서</span>
          <span>❤️ 기업의 하트를 누르고,</span>
          <span>💨 좋아하는 기업을 빠르게 만나보세요!</span>
        </S.TxtWrapper>
      </section>
    );
  }

  return (
    <section>
      <TitleH3>내가 좋아하는 기업</TitleH3>
      <S.Ul>
        {list.map((item, index) => {
          const { id, img, title } = item;
          return <CardSimple key={index} id={id} img={img} name={title} likable={true} />;
        })}
      </S.Ul>
    </section>
  );
};

export default LikesList;
