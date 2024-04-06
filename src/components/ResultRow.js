import React from "react";
import { options, timeOptions } from "../utilities/constants";
const ResultRow = ({ data }) => {
  const { title, description, thumbnails, channelTitle, publishedAt } =
    data.snippet;

  const getPublishedAt = function (dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleString("en-US", options);
    const formattedTime = dateTime.toLocaleString("en-US", timeOptions);

    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    return formattedDateTime;
  };

  return (
    <div className="flex flex-nowrap">
      <img
        className="m-4 w-96 rounded-lg"
        alt="video-icon"
        src={thumbnails?.high?.url}
      />
      <div>
        <h1
          className="font-bold my-4 text-lg"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p>{channelTitle}</p>
        <p
          className="text-md"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <h2 className="text-lg font-medium mt-24">
          {getPublishedAt(publishedAt)}
        </h2>
      </div>
    </div>
  );
};

export default ResultRow;
