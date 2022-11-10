import React, { useEffect, useState } from "react";
import CardSimple from "../../components/CardSimple";
import styled from "styled-components";

const LikesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/simplelist");
    const json = await res.json();
    const data = json.data;
    setList(data);
  };

  return (
    <section>
      <Title>내가 좋아하는 기업</Title>
      <Ul>
        {list.map((item) => {
          const { id, img, name } = item;
          return <CardSimple id={id} img={img} name={name} likable={true} />;
        })}
      </Ul>
    </section>
  );
};

export default LikesList;

const Title = styled.h3`
  ${({ theme }) => theme.TEXT.headerMd}
`;

const Ul = styled.ul`
  display: flex;
  column-gap: 10px;
  padding: 12px 0 20px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
