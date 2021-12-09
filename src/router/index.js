import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import NavBar from "../components/navBar";
import { AuthProviders } from "../providers";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProviders>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </AuthProviders>
    </BrowserRouter>
  );
};

export default Router;
