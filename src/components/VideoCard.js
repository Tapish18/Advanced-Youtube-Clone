import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg w-60">
      <img
        className="w-48 rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold pb-2 text-sm">{title}</li>
        <li className="text-gray-500 font-semibold">{channelTitle}</li>
        <li className="text-gray-700">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
