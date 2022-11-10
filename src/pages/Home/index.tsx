import React from "react";
import styled from "styled-components";
import CompanyList from "./CompanyList";
import LikesList from "./LikesList";
import Banner from "./Banner";

const Index = () => {
  return (
    <>
      <HiddenTitle>홈</HiddenTitle>
      <Banner />
      <Wrapper>
        <LikesList />
        <CompanyList />
      </Wrapper>
    </>
  );
};

export default Index;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;

const Wrapper = styled.div`
  padding: 0 16px;
`;
