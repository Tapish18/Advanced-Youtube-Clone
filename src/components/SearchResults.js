import { YOUTUBE_CONTENT_URL } from "../utilities/constants";
import { useSearchParams } from "react-router-dom";
import ResultRow from "./ResultRow";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SearchResults = () => {
  const [querryInfo] = useSearchParams();
  const [querrySearchResults, setQuerrySearchResults] = useState([]);
  console.log(querryInfo.get("q"));

  const getSearchResults = async () => {
    let data = await fetch(YOUTUBE_CONTENT_URL + querryInfo.get("q"));
    data = await data.json();
    console.log(data.items);
    setQuerrySearchResults(data.items);
  };

  useEffect(() => {
    getSearchResults();
  }, []);

  return (
    <div className="m-4">
      {querrySearchResults.length > 0 &&
        querrySearchResults.map((info) => {
          return (
            <Link to={`/watch?v=${info?.id?.videoId}`} key={info?.id?.videoId}>
              <ResultRow data={info} />
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
