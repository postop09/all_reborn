import React, {Suspense} from 'react';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Search from "./pages/Search";
import Error from "./pages/Error";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;