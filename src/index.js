import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonList from "./components/ButtonList";
import VideoList from "./components/VideosList";
import Streaming from "./components/Streaming";
import Body from "./components/Body";
import SearchedVideos from "./components/SearchedVideos";

const AppLayout = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Provider store={store}>
      <Header isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
      <div className={`flex ${isDarkTheme ? "bg-black text-white" : "bg-white text-black"}`}>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <ButtonList /> && <VideoList />,
          },
          {
            path: "stream",
            element: <Streaming />,
          },
          {
            path: "results",
            element: <SearchedVideos />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
