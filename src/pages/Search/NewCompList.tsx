import React, { useEffect, useState } from "react";
import { TitleH3 } from "../../style/style";
import CardList from "../../components/CardList";
import styled from "styled-components";

const NewCompList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList(data);
  };

  if (list.length > 0) {
    return (
      <section>
        <TitleH3>최근에 등록되었어요</TitleH3>
        <CardList data={list} />
      </section>
    );
  }
  return (
    <section>
      <TitleH3>최근에 등록되었어요</TitleH3>
      <TxtWrapper>
        <span>등록된 기업이 없습니다.</span>
        <span>팀 올리본은 기업등록을 서둘러주세요!</span>
      </TxtWrapper>
    </section>
  );
};

export default NewCompList;

const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.bodyLg};
  text-align: center;
  color: ${({ theme }) => theme.COLOR.pointOriginal};

  span {
    display: block;
  }
`;
