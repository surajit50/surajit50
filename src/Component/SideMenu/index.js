import React from "react";
import SidebarOption from "../SidebarOption";
import "./SideMenu.css";
function SideMenu() {
  return (
    <div className="sideMenu">
      <SidebarOption title="Block Development Officer" />
      <SidebarOption title="Jt. Block Development Officer" />
      <SidebarOption title="Engineering Setup" />
      <SidebarOption title="Election Setup" />
      <SidebarOption title="Panchayat Setup" />
      <SidebarOption title="Accounts Setup" />

      <SidebarOption title="Disaster Management Setup" />
    </div>
  );
}

export default SideMenu;
