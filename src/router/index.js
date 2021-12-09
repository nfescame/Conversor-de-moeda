import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import NavBar from "../components/navBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
