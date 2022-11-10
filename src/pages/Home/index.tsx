import React from "react";
import styled from "styled-components";
import CompanyList from "./CompanyList";
import LikesList from "./LikesList";

const Index = () => {
  return (
    <>
      <HiddenTitle>홈</HiddenTitle>
      <LikesList />
      <CompanyList />
    </>
  );
};

export default Index;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;
