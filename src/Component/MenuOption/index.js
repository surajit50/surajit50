import React from "react";
import "./MenuOption.css";
function MenuOption({ Icon, title }) {
  return (
    <div className="menuOption">
      {Icon && <Icon className="menuOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="menuOption__chanmel">
          <span className="sidebar__hash"></span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default MenuOption;
