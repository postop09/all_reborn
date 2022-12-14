import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Map from "./pages/Map";
import Likes from "./pages/Likes";
import CompanyList from "./pages/CompanyList";
import DetailForm from "./components/Detail/DetailForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<CompanyList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<DetailForm />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
