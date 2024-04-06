import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
