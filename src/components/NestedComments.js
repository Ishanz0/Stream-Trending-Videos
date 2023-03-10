import React from "react";

const commentsData = [
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: [
      {
        name: "Ishan",
        text: "dummy text for nested comments!",
        replies: []
      },
      {
        name: "Ishan",
        text: "dummy text for nested comments!",
        replies: []
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
                        replies: []
                      },
                      {
                        name: "Ishan",
                        text: "dummy text for nested comments!",
                        replies: []
                      },
                    ],
                  },
                  {
                    name: "Ishan",
                    text: "dummy text for nested comments!",
                    replies: []
                  },
                ],
              },
              {
                name: "Ishan",
                text: "dummy text for nested comments!",
                replies: []
              },
            ],
          },
          {
            name: "Ishan",
            text: "dummy text for nested comments!",
            replies: []
          },
        ],
      },
    ],
  },
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: []
  },
  {
    name: "Ishan",
    text: "dummy text for nested comments!",
    replies: []
  },
];
 
const Comment = ({ comments }) => {
  const { name, text, replies } = comments;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
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
      {console.log(comment.replies)}
      <Comment key={index} comments={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList data={comment.replies} />
      </div>
    </div>
  ));
};

const NestedComments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default NestedComments;
