import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const Header = ({ isDarkTheme, onToggleTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  function handleSuggestionClick(suggestion) {
    setSearchQuery(suggestion);
    navigate("/results?q=" + suggestion);
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const inputClass = `rounded-l-full border ${
    isDarkTheme ? "border-gray-400 bg-black" : "border-gray-500"
  } px-4 w-[565px] h-8 text-gray-500 bg-${
    isDarkTheme ? "gray-700" : "white"
  }`;

  const buttonClass = `rounded-r-full border ${
    isDarkTheme ? "border-gray-400" : "border-gray-500"
  } w-16 text-gray-500 bg-${
    isDarkTheme ? "gray-700" : "white"
  } flex items-center justify-center`;

  const svgClass = `fill-current text-gray-500 ${
    isDarkTheme ? "text-white" : ""
  } h-6 w-6`;

  return (
    <div className={`p-3 flex fixed w-screen ${
      isDarkTheme ? "bg-black text-white" : "bg-white text-black"
    }`}>
      <div className="flex">
        <button onClick={() => toggleMenuHandler()}>
          <svg
            className="fill-current h-5 w-5 ml-3 hover:bg-gray-200"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <Link to="/">
          <img
            className="h-8 w-8 ml-7"
            src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            alt="youtube"
          />
        </Link>
        <p className="p-0.5 font-bold text-xl">
          <Link to="/">YouTube</Link>
        </p>
      </div>
      <div className="relative ml-[100px]">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={inputClass}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button
            className={buttonClass}
            onClick={() => handleSuggestionClick(searchQuery)}
          >
            <svg
              className={svgClass}
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white shadow-lg rounded-xl py-2 border border-gray-100 top-full w-[565px] px-4">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 hover:bg-gray-100"
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isDarkTheme ? (
        <button className="ml-auto text-white" onClick={onToggleTheme}>
        Light Mode
      </button>
      ) : (
        <button className="ml-auto text-black" onClick={onToggleTheme}>
        Dark Mode
      </button>
      )}
      {/* <button
          className={`ml-auto ${
            isDarkTheme
              ? "text-white"
              : "text-black"
          }`}
          onClick={onToggleTheme}
        >
          Toggle Theme
        </button> */}
      <button className="ml-auto">
        <svg
          className="h-8 w-8 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
