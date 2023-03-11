import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling");

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
      <div className="ml-2 h-[450px] w-full rounded-md bg-slate-100 p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        {messages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
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
          className="px-2 w-[270px]"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-300 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
