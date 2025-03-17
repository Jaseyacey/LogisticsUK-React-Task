import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import "./styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
