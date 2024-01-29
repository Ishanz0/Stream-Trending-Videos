import { useEffect, useState, useRef } from "react";
import { VIDEOS_URL } from "../utils/constants.js";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    getVideos();
  }, [pageToken]);

  useEffect(() => {
    if (!loading) return;
    getMoreVideos();
  }, [loading]);

  function handleObserver(entries) {
    const target = entries[0];
    if (target.isIntersecting) {
      setLoading(true);
    }
  }

  async function getVideos() {
    const data = await fetch(`${VIDEOS_URL}&pageToken=${pageToken || ""}`);
    const json = await data.json();
    setVideos(pageToken ? [...videos, ...json.items] : json.items);
    if (json.nextPageToken) {
      setPageToken(json.nextPageToken);
    }
  }

  async function getMoreVideos() {
    const data = await fetch(`${VIDEOS_URL}&pageToken=${pageToken}`);
    const json = await data.json();
    setVideos((videos) => [...videos, ...json.items]);
    if (json.nextPageToken) {
      setPageToken(json.nextPageToken);
    } else {
      setLoading(false); // set loading to false if there are no more pages to load
    }
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1,
    });
    if (videos.length === 0) return;
    const lastVideo = document.querySelector(
      ".video-container > div:last-child"
    );
    if (lastVideo) {
      observer.current.observe(lastVideo);
    }
    return () => {
      if (lastVideo) {
        observer.current.unobserve(lastVideo);
      }
    };
  }, [videos]);

  return (
    <div className="video-container">
      <div className="flex flex-wrap">
        {videos.map((video, index) => (
          <Link to={"/stream?v=" + video.id} key={index}>
            <VideoCard videos={video} channelId={video?.snippet?.channelId} />
          </Link>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default VideoList;
