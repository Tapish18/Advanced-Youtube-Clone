import React from "react";
import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap mx-16">
      {Array(50)
        .fill("")
        .map((val, idx) => {
          return <ShimmerCard key={idx} />;
        })}
    </div>
  );
  //   return <ShimmerCard />;
};

export default Shimmer;
