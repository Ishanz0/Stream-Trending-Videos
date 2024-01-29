import React, { useEffect, useState } from "react";
import { SEARCH_VIDEOS, API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    getVideos();
  }, [searchParam]);

  const getVideos = async () => {
    const data = await fetch(
      `${
        SEARCH_VIDEOS + decodeURIComponent(searchParam.get("q"))
      }&key=${API_KEY}`
    );
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link key={video.id?.videoId} to={"/stream?v=" + video?.id?.videoId}>
            <VideoCard videos={video} channelId={video?.snippet?.channelId} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
