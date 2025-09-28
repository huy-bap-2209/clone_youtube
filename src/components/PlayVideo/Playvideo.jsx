import React from "react";
import "./Playvideo.css";

import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Em gái lộ link múp rụp</h3>
      <div className="play-video-info">
        <p>2.254.135 Views &bull; 6 days ago</p>
        {/* prettier-ignore */}
        <div>
            <span><img src={like} alt="" />155.648</span>
            <span><img src={dislike} alt="" />1.235</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Bigo Live</p>
          <span>1.3M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          accusantium.
        </p>
        <hr />
        <h4>2.456 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Mashon <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corrupti commodi iusto!
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>315</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
