import React from "react";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Live",
    "Boolywood Music",
    "Mantras",
    "Comedy",
    "Gaming",
    "Cricket",
    "Thrillers",
    "Shark Tank",
  ];
  return (
    <div className="ml-6 flex flex-wrap justify-center">
      {buttons.map((bot, index) => (
        <button
          key={index}
          className="bg-gray-100 my-2 m-0.5 px-6 py-2 rounded-xl hover:bg-gray-700"
        >
          {bot}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
