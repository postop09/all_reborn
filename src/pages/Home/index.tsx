import React from "react";
import CompanyList from "./CompanyList/CompanyList";
import LikesList from "./LikeList/LikesList";
import Banner from "./Banner/Banner";
import * as S from "./index.style";

const Index = () => {
  return (
    <>
      <S.HiddenTitle>홈</S.HiddenTitle>
      <Banner />
      <S.Wrapper>
        <LikesList />
        <CompanyList />
      </S.Wrapper>
    </>
  );
};

export default Index;
