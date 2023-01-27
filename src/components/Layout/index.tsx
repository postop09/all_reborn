import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import * as S from "./index.style";

const Index = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default Index;
