import React, {useEffect, useState} from 'react';
import CardList from "../../components/CardList";
import styled from "styled-components";
import RecentList from "./RecentList";
import RecommendList from "./RecommendList";
import NewCompList from "./NewCompList";

const Index = () => {
  return (
    <Wrapper>
      <HiddenTitle>검색</HiddenTitle>
      <RecentList/>
        <SubWrapper>
          <RecommendList/>
          <NewCompList/>
        </SubWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper  = styled.section`
  padding: 20px 16px 0;
`

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const SubWrapper = styled.div`
  text-align: center;
`