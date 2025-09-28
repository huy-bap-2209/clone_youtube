import React, { useEffect, useState } from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import moment from "moment";

import { API_KEY, value_converter } from "../../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `;
    await fetch(videoList_url).then((response) =>
      response.json().then((data) => setData(data.items))
    );
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => {
        return (
          <Link
            // nên dùng ket={item.id}(unique) tránh console warning
            key={item.id}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {/* nếu publishedAt là undefine hay do Api chưa trả về có thể sẽ lỗi */}
              {/* nên check điều kiện trước */}
              {item.snippet.publishedAt &&
                moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
