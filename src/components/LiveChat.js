import React from "react";
import LiveComment from "./LiveComment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import { generateNames, generateMessage } from "../utilities/helper";
const LiveChat = () => {
  const messages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setInterval(() => {
      //   console.log("Interval Called");
      dispatch(
        addMessage({
          name: generateNames(),
          text: generateMessage(10),
        })
      );
    }, 1500);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="mx-4 p-2 w-96 h-[500px] border border-black bg-slate-200 rounded-lg flex flex-col-reverse overflow-y-scroll">
      {messages.map((val, idx) => {
        return <LiveComment name={val.name} text={val.text} key={idx} />;
      })}
      {/* <LiveComment name={"Tapish"} text={"This is my first comment"} /> */}
    </div>
  );
};

export default LiveChat;
