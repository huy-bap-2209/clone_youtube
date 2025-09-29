import React, { useEffect, useState } from "react";
import "./Playvideo.css";

// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

import moment from "moment";

import { API_KEY, value_converter } from "../../data";
import { data } from "react-router-dom";

const Playvideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const fetchVideoData = async () => {
    if (!API_KEY) {
      console.warn("API_KEY chưa được khai báo!");
      return;
    }

    // fetching videos data in4
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //fetching channel data in4
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.item[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        // truyền props để hiển thị link của video của api
        // ?autoplay=1 là khi vào trang sẽ auto play video 1 lần
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {/* value_converter là hàm điều kiện trong data.js */}
          {apiData
            ? value_converter(apiData.statistics.viewCount)
            : "Loading..."}{" "}
          Views &bull;{" "}
          {/* default state is null nên phải check trước nếu k lại lỗi :(( */}
          {/* using optional chaining (?.) check safe before access sâu bên trong object */}
          {/* tường minh: if apiData is null or undefine then return undefine*/}
          {/* tường minh: if apiData.snippet is null or undefine then return undefine as well */}
          {/* tường minh: only when apiData and snippet both exist will get publishedAt */}
          {apiData?.snippet?.publishedAt
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "Loading..."}
        </p>
        {/* prettier-ignore */}
        <div>
            <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):"Loading..."}</span>
            <span><img src={dislike} alt="" />1.235</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          // check nếu api data có sẵn thì hiện logo user còn k thì render empty string
          src={
            channelData
              ? channelData.snippet.thumbnails.default.url
              : "undefine"
          }
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "No name"}</p>
          <span>1.3M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        <p>
          {/* .slice giới hạn decs nếu quá dài */}
          {apiData ? apiData.snippet.description.slice(0, 200) : "Loading..."}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          accusantium.
        </p>
        <hr />
        <h4>
          {apiData
            ? value_converter(apiData.statistics.commentCount)
            : "Loading..."}{" "}
          Comments
        </h4>
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
