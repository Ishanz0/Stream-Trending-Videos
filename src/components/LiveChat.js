import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";
import ThemeContext from "../utils/themeContext";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const { isDarkTheme } = useContext(ThemeContext);

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className={`ml-2 h-[450px] w-full rounded-md p-2 border ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-200"
        } overflow-y-scroll flex flex-col-reverse`}
      >
        {messages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className={`w-full p-2 ml-2 border ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-200"
        }`}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Ishan",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className={`px-2 w-[270px] ${
            isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button
          className={`px-2 mx-2 rounded-md ${
            isDarkTheme ? "bg-green-500 text-white" : "bg-green-300 text-black"
          }`}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
