import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  max-width: 428px;
  margin: auto;
`;

const MainWrapper = styled.main`
  padding: 80px 16px 86px;
`;
