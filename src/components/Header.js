import Logo from "../assets/images/ytLogo.png";
import UserLogo from "../assets/images/user-profile-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_URL } from "../utilities/constants";
import { cacheResults } from "../utilities/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestions = async function () {
    let data = await fetch(YOUTUBE_SEARCH_URL + searchText);
    data = await data.json();
    // console.log(searchText, " ", data[1]);
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchText]: [data[1]],
      })
    );
    console.log(searchText, "->", suggestions);
  };

  useEffect(() => {
    let id;
    if (cache[searchText]) {
      setSuggestions(cache[searchText]);
    } else {
      id = setTimeout(() => handleSuggestions(searchText), 200);
    }
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [searchText]);

  // useEffect(() => {
  //   const handleScroll = function () {
  //     setShowSuggestions(false);
  //     console.log("called from window scroll event");
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      // onScroll={() => {
      //   console.log("called from onScroll");
      //   setShowSuggestions(false);
      // }}
      className="grid grid-flow-col p-5 m-2 shadow-lg"
    >
      <div className="col-span-1 flex">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <Link to="/">
          <img className="h-16 -my-4" alt="yt-icon" src={Logo} />
        </Link>
      </div>
      <div className="flex flex-col col-span-10 px-44">
        <div className="flex">
          <input
            className="w-4/6 h-10 border-2 border-gray-400 rounded-l-full px-4"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
          ></input>
          <Link
            to={`/search?q=${searchText}`}
            onClick={() => setSearchText("")}
          >
            <button className="">
              <img
                className="h-10 border-2 border-gray-400 border-l-0 rounded-r-full bg-gray-200 px-2"
                alt="search-icon"
                src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
              />
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="fixed top-16 bg-white my-3 mx-4 w-[33rem] text-lg rounded-lg shadow-lg">
            <ul>
              {suggestions.map((val, idx) => {
                return (
                  <Link
                    to={`/search?q=${val}`}
                    key={idx}
                    onClick={() => setSearchText("")}
                  >
                    <li className="px-2 flex hover:bg-gray-100">
                      <img
                        className="h-6 mr-1 pt-1"
                        src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
                      ></img>
                      {val}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="w-8" alt="user" src={UserLogo} />
      </div>
    </div>
  );
};

export default Header;
