import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CompanyList from "../pages/CompanyList";
import Map from "../pages/Map";
import Likes from "../pages/Likes";
import Search from "../pages/Search";
import Detail from "../components/Detail";
import Error from "../pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<CompanyList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;