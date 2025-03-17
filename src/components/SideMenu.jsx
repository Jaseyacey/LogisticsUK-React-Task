import React from "react";
import { Link } from "react-router-dom";
import menuData from "./data/menu.json";
import logo from "../components/assets/logo.png";
import "./styles/SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
        <div className="logo-container">
        <img src={logo} alt="Logistics UK Logo" className="logo" />
      </div>
      <ul>
        {menuData.data.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;