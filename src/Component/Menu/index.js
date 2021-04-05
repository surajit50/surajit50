import React, { useState } from "react";
import MenuOption from "../MenuOption";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menu__option">
        <MenuOption title="Home" />
        <MenuOption title="About Us" />
        <MenuOption title="Search" />
        <MenuOption title="GP Profile" />
        <MenuOption title="News & Announcement" />
        <MenuOption title="Development Schemes" />
        <MenuOption title="Whom To Contact" />
        <MenuOption title="Schemes" />
        <MenuOption title="Citizen Services" />
        <MenuOption title="Notice" />
        <MenuOption title="Tenders" />
        <MenuOption title="Photo Gallery" />
      </div>
    </div>
  );
}

export default Menu;
