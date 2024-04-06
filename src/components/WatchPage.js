import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { addMessage } from "../utilities/chatSlice";

const WatchPage = () => {
  const [videoId] = useSearchParams();
  const [myLiveMessage, setMyLiveMessage] = useState("");
  const dispatch = useDispatch();
  //   console.log(videoId.get("v"));

  const handleFormSubmittion = function (e) {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Tapish Verma",
        text: myLiveMessage,
      })
    );
    setMyLiveMessage("");
  };

  return (
    <div className="flex flex-col">
      <div className="h-auto w-auto mb-4 flex justify-evenly">
        <div>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${videoId.get(
              "v"
            )}?si=JPx3T6R4aXY6zeS1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
          <form
            className="mx-4 p-2 w-96"
            onSubmit={(e) => {
              handleFormSubmittion(e);
            }}
          >
            <input
              type="text"
              className="w-3/4 px-1 focus:outline-none border-b-2 border-slate-600"
              placeholder="Say Something"
              value={myLiveMessage}
              onChange={(e) => setMyLiveMessage(e.target.value)}
            ></input>
            <button className="ml-2 px-1 border border-black rounded-lg text-white bg-blue-600">
              Comment
            </button>
          </form>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
