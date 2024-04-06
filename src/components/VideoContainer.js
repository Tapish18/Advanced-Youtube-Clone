import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../utilities/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../utilities/appSlice";
const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const dispatch = useDispatch();

  const removeMenu = () => {
    dispatch(hideSidebar());
  };

  async function getVidoes() {
    let data = await fetch(YOUTUBE_API_URL);
    data = await data.json();
    setVideosList(data.items);
  }

  useEffect(() => {
    getVidoes();
  }, []);

  if (videosList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap">
      {videosList.map((video) => {
        return (
          <Link
            key={video.id}
            to={`/watch?v=${video.id}`}
            onClick={() => {
              removeMenu();
            }}
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
