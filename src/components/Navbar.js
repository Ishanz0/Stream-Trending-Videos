import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-3 mt-16 fixed">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2.5 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 10h18l-9-9-9 9zm0 4v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h6v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6" />
        </svg>
      </Link>
      <p className="text-sm">
        <Link to="/">Home</Link>
      </p>
      <svg
        viewBox="0 0 24 24"
        className="ml-2 h-6 w-6 mt-6"
        stroke="currentColor"
        fill="none"
      >
        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
      </svg>
      <p className="text-sm">Shorts</p>
      <svg
        viewBox="0 0 24 24"
        className="ml-2 h-6 w-6 mt-6"
        stroke="currentColor"
        fill="none"
      >
        <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
      </svg>
      <p className="text-sm">follows</p>
      <svg
        viewBox="0 0 24 24"
        className="ml-2 h-6 w-6 mt-6"
        stroke="currentColor"
        fill="none"
      >
        <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
      </svg>
      <p className="text-sm">Library</p>
      <svg
        viewBox="0 0 24 24"
        className="ml-2 h-6 w-6 mt-6"
        stroke="currentColor"
        fill="none"
      >
        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
      </svg>
      <p className="text-sm">History</p>
    </div>
  );
};

export default Navbar;
