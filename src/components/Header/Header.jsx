import React from "react";
import "./Header.css";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo2.png";
import search from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import user_profile from "../../assets/user_profile.jpg";
import voice_search from "../../assets/voice_search.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <div className="logo-home-page">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
            <h4> HuyBapTube</h4>
          </Link>
        </div>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
        <img className="voice-search" src={voice_search} alt="" />
      </div>
      <div className="nav-right flex-div">
        <img className="" src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={user_profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
