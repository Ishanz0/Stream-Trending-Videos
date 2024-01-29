import React, { useContext } from "react";
import ThemeContext from "../utils/themeContext";

const commentsData = [
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: [
      {
        name: "Ishan",
        text: "dummy text for nested comments!",
        replies: [],
      },
      {
        name: "Ishan",
        text: "dummy text for nested comments!",
        replies: [],
      },
    ],
  },
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: [
      {
        name: "Ishan",
        text: "dummy text for nested comments!",
        replies: [
          {
            name: "Ishan",
            text: "dummy text for nested comments!",
            replies: [
              {
                name: "Ishan",
                text: "dummy text for nested comments!",
                replies: [
                  {
                    name: "Ishan",
                    text: "dummy text for nested comments!",
                    replies: [
                      {
                        name: "Ishan",
                        text: "dummy text for nested comments!",
                        replies: [],
                      },
                      {
                        name: "Ishan",
                        text: "dummy text for nested comments!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ishan",
                    text: "dummy text for nested comments!",
                    replies: [],
                  },
                ],
              },
              {
                name: "Ishan",
                text: "dummy text for nested comments!",
                replies: [],
              },
            ],
          },
          {
            name: "Ishan",
            text: "dummy text for nested comments!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: [],
  },
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: [],
  },
];

const Comment = ({ comments }) => {
  const { name, text, replies } = comments;
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex shadow-sm p-2 rounded-lg my-2 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <button>
        <svg
          className="h-12 w-12 text-blue-400"
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
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return data.map((comment, index) => (
    <div>
      <Comment key={index} comments={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList data={comment.replies} />
      </div>
    </div>
  ));
};

const NestedComments = () => {
  return (
    <div className="m-5 p-2 w-[800px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default NestedComments;
