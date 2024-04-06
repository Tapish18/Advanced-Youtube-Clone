import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) return null;

  return (
    <div className="w-48 min-w-48 flex flex-col text-lg shadow-lg p-2">
      <ul className="py-2 border-b-2">
        <li className="font-bold">
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="py-2 border-b-2">
        <li className="py-2">
          <span className="font-bold">You </span>&gt;
        </li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
    </div>
  );
};

export default Sidebar;
