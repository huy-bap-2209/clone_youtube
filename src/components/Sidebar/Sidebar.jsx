import React from "react";
import "./Sidebar.css";

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-links ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-links ${category === 1 ? "active" : ""}`}
          onClick={() => setCategory(1)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-links ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-links ${category === 3 ? "active" : ""}`}
          onClick={() => setCategory(3)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-links ${category === 4 ? "active" : ""}`}
          onClick={() => setCategory(4)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-links ${category === 5 ? "active" : ""}`}
          onClick={() => setCategory(5)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-links ${category === 6 ? "active" : ""}`}
          onClick={() => setCategory(6)}
        >
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`side-links ${category === 7 ? "active" : ""}`}
          onClick={() => setCategory(7)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-links ${category === 8 ? "active" : ""}`}
          onClick={() => setCategory(8)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribe-list">
        <h3>Subscribe</h3>
        <div
          className={`side-links ${category === 9 ? "active" : ""}`}
          onClick={() => setCategory(9)}
        >
          <img src={jack} alt="" />
          <p>PewDieDie</p>
        </div>
        <div
          className={`side-links ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={simon} alt="" />
          <p>David Jason</p>
        </div>
        <div
          className={`side-links ${category === 11 ? "active" : ""}`}
          onClick={() => setCategory(11)}
        >
          <img src={tom} alt="" />
          <p>Tom Cruid </p>
        </div>
        <div
          className={`side-links ${category === 12 ? "active" : ""}`}
          onClick={() => setCategory(12)}
        >
          <img src={cameron} alt="" />
          <p>5 Minute Craft</p>
        </div>
        <div
          className={`side-links ${category === 13 ? "active" : ""}`}
          onClick={() => setCategory(13)}
        >
          <img src={megan} alt="" />
          <p>Red Bull Challenge</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
