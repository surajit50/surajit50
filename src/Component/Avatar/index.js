import React from "react";
import AvatarImg from "../../image/avatar.png";
import "./Avatar.css";
function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__container">
        <div className="avatar__image">
          <img src={AvatarImg} alt="prodhan" width="70px" height="70px" />
        </div>
        <div className="avatar__info">
          <div className="avatar__name">Shefali Barman</div>
          <div className="avatar__description">Prodhan Dhalpara GP</div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
