import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

import ThemeContext from "../utils/themeContext";

const Body = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="w-full">
      <Sidebar isDarkTheme={isDarkTheme} />
      <Outlet />
    </div>
  );
};

export default Body;
