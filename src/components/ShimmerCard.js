import React from "react";

const ShimmerCard = () => {
  return (
    <div className="m-4 p-2 shadow-lg w-64 flex flex-col flex-wrap">
      <div className="h-40 w-60 rounded-lg bg-gray-300"></div>
      <div className="bg-gray-300 mt-2 w-52 h-4 rounded-sm"></div>
      <div className="bg-gray-300 mt-2 w-40 h-4 rounded-sm"></div>
    </div>
  );
};

export default ShimmerCard;
