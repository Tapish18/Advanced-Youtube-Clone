import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex p-4">
      <Sidebar />
      <Outlet />
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
