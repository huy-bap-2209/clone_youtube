import React, { useEffect, useState } from "react";
import "./Playvideo.css";

// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
// import dislike from "../../assets/dislike.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import user_profile from "../../assets/user_profile.jpg";

import moment from "moment";

import { API_KEY, value_converter } from "../../data";
import { useParams } from "react-router-dom";
// import { data } from "react-router-dom";

const Playvideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [cmtData, setCmtData] = useState([]);
  const [inputActive, setInputActive] = useState(false);
  const [comments, setComments] = useState("");

  // const [loading, setLoading] = useState(true);

  const fetchVideoData = async () => {
    // if (!API_KEY) {
    //   console.warn("API_KEY chưa được khai báo!");
    //   return;
    // }

    // fetching videos data in4
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //fetching channel data in4
    // const channelData_url = `https://youtube.googleapis.com/youtube/v3/ { ĐỂ Ý ĐOẠN ROUTE NÀY VÌ HÀM LẤY CHANNEL DATA NÊN PHẢI FETCH VỚI CHANNEL CHỨ KPH VIDEO NHƯ TRÊN } channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const cmt_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=699&videoId=${videoId}&key=${API_KEY}`;
    await fetch(cmt_url)
      .then((res) => res.json())
      .then((data) => setCmtData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

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
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          // check nếu api data có sẵn thì hiện logo user còn k thì render empty string
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "No name"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : ""}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        <p>
          {/* .slice giới hạn decs nếu quá dài */}
          {/* nếu mô tả quá dài & cần ẩn bớt có thể dùng .slice(0, xxx) */}
          {apiData ? apiData.snippet.description : "Loading..."}
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
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Add Comments"
              value={comments}
              onFocus={() => setInputActive(true)}
              onChange={(e) => setComments(e.target.value)}
            />
            {inputActive && (
              <div className="input-buttons">
                <button
                  onClick={() => {
                    console.log("Post comment:", comments);
                    setComments("");
                    setInputActive(false);
                  }}
                >
                  Comment
                </button>
                <button
                  onClick={() => {
                    setComments("");
                    setInputActive(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        {cmtData.map((item, index) => {
          return (
            <div key={index} className="comments-container">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>2 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comments-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playvideo;
