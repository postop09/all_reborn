import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSimple from "../../components/CardSimple";
import CardList from "../../components/CardList";
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
