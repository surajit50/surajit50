import React from "react";
import "./ProdhanDesk.css";
function ProdhanDesk() {
  return (
    <div className="prodhanDesk">
      <div className="prodhanDesk__head">Latest Notifications</div>
      <div className="prodhanDesk__body">
        <ul>
          <li>This is tender 1st </li>
          <li>This is tender 1st </li>
          <li>This is tender 1st </li>
          <li>This is tender 1st </li>
          <li>This is tender 1st </li>
          <li>This is tender 1st </li>
        </ul>
        <button className="prodhanDesk__btn">Read more</button>
      </div>
    </div>
  );
}

export default ProdhanDesk;
