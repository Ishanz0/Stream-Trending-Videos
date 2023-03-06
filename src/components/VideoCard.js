import { useEffect, useState } from "react";
import { CHANNELS_URL } from "../utils/constants";

const VideoCard = ({ videos, channelId }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  async function getChannels() {
    const data = await fetch(`${CHANNELS_URL}&id=${channelId}`);
    const json = await data.json();
    setChannels(json?.items);
  }

  return (
    <div>
      <img
        className="w-[262px] rounded-xl ml-5 mt-5"
        alt="video_thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
      ></img>
      <div className="flex items-center">
        <img
          className="h-9 w-9 ml-6 mt-3 rounded-full"
          alt="channel_thumbnail"
          src={channels && channels[0]?.snippet?.thumbnails?.default?.url}
        />
        <p className="ml-4 text-xs mt-2 line-clamp-2 w-52 font-semibold">{videos?.snippet?.title}</p>
      </div>
      <p className="ml-[75px] text-xs">{videos?.snippet?.channelTitle}</p>
      <p className="ml-[75px] text-xs">{videos?.statistics?.viewCount} views 〰 {videos?.statistics?.likeCount} likes </p>
    </div>
  );
};

export default VideoCard;
