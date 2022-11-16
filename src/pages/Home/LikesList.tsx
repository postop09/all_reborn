import React, { useEffect, useState } from "react";
import CardSimple from "../../components/CardSimple";
import styled from "styled-components";
import { TitleH3 } from "../../style/style";

const LikesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    if (process.env.NODE_ENV === "development") {
      const res = await fetch("/simplelist");
      const json = await res.json();
      const data = json.data;
      setList(data);
    } else {
      setList([]);
    }
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
          const { id, img, name } = item;
          return <CardSimple id={id} img={img} name={name} likable={true} key={index} />;
        })}
      </Ul>
    </section>
  );
};

export default LikesList;

const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.bodyLg};
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
