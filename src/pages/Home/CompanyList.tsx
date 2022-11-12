import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import styled from "styled-components";

const CompanyList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await fetch("/list");
    const json = await res.json();
    const data = json.data;
    setList([]);
  };

  if (list.length === 0) {
    return (
        <Wrapper>
          <Title>이 기업들을 살펴보세요</Title>
          <TxtWrapper>
            <span>등록된 기업이 없습니다.</span>
            <span>팀 올리본은 기업등록을 서둘러주세요!</span>
          </TxtWrapper>
        </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title>이 기업들을 살펴보세요</Title>
      <CardList data={list} />
    </Wrapper>
  );
};

export default CompanyList;

const Wrapper = styled.section`
  margin-top: 20px;
`

const TxtWrapper = styled.p`
  ${({theme}) => theme.TEXT.bodyLg};
  text-align: center;
  color: ${({theme}) => theme.COLOR.pointOriginal};
  
  span {
    display: block;
  }
`

const Title = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.TEXT.headerMd}
`;
