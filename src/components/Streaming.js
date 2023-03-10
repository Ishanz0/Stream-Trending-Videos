import React from "react";
import { useSearchParams } from "react-router-dom";
import NestedComments from "./NestedComments";

const Streaming = () => {
  const [searchParam] = useSearchParams();

  return (
    <>
    <div className="px-5">
      <iframe
        width="800"
        height="450"
        src={"http://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div>
      <NestedComments />
    </div>
    </>
  );
};

export default Streaming;
