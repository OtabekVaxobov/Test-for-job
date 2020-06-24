import React from "react";
import "./header.css";
import LogoImg from "./logo.png";
import Buy from "./Buy.png";
import SideBar from "./sidebar";

export default function Footer() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img className="logo" src={LogoImg} alt="" />
      </div>

      <div className="Header-end">
        <div className="Magazine">
        <img className="logo" src={Buy} alt="" />
        </div>
        <div className="Burger">
        <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      
    </div>
        </div>
      </div>
    </div>
  );
}
