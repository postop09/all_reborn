import React, { useEffect, useState } from "react";
import CardSimple from "../../components/CardSimple";
import styled from "styled-components";
import { TitleH3 } from "../../style/style";
import * as mockData from "../../mockData";
import { onGetLikes } from "../../util/handleLikes";
import { CardProps } from "../../util/type";

interface List extends Array<CardProps> {}

const LikesList = () => {
  const [list, setList] = useState<List>([]);

  useEffect(() => {
    onFilterLikes();
  }, []);

  // 전체기업 중 좋아요 기업 출력
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
        <TxtWrapper>
          <strong>😳 이런! 아직 좋아하는 기업이 없어요!</strong>
          <span>🔍 내가 좋아하는 기업을 찾아서</span>
          <span>❤️ 기업의 하트를 누르고,</span>
          <span>💨 좋아하는 기업을 빠르게 만나보세요!</span>
        </TxtWrapper>
      </section>
    );
  }

  return (
    <section>
      <TitleH3>내가 좋아하는 기업</TitleH3>
      <Ul>
        {list.map((item, index) => {
          const { id, img, title } = item;
          return <CardSimple key={index} id={id} img={img} name={title} likable={true} />;
        })}
      </Ul>
    </section>
  );
};

export default LikesList;

const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;

  strong {
    display: block;
    margin-bottom: 16px;
  }

  span {
    display: block;
  }
`;

const Ul = styled.ul`
  display: flex;
  column-gap: 10px;
  padding: 12px 0 0px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
