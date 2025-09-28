import React, { useState } from "react";
import Navbar from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />

        {/* path là URL pattern mà Router sẽ match */}
        {/* :categoryId sẽ lấy category ID trong URL */}
        {/* :videoId sẽ lấy video ID trong URL */}
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
