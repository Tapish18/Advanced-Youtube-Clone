import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "News",
  "Kapil Sharma",
  "Drama",
  "Gaming",
  "Songs",
  "Data Structures & Algorithms",
  "Coding",
  "UPSC",
  "Sports",
  "Elon Musk",
];

const ButtonsList = () => {
  return (
    <div className="mx-4 flex flex-nowrap">
      {buttonList.map((val, idx) => {
        return <Button name={val} key={idx} />;
      })}
    </div>
  );
};

export default ButtonsList;
