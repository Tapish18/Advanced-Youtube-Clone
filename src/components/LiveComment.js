import React from "react";
import userLogo from "../assets/images/user-profile-icon.png";
const LiveComment = ({ name, text }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img className="h-8 w-8 m-2" alt="user-image" src={userLogo} />
      <span className="font-bold mr-2">{name}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default LiveComment;
