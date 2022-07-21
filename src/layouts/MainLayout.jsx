import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
