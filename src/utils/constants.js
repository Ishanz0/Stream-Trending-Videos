// const API_KEY = "AIzaSyDXSeQ24huRfjfykCnFjNCrjXi1Z7NEIrk";

const API_KEY = "AIzaSyAlAm0xY9A9HE5YPyRPjNuhpbGOfeiyYcM";

export const VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const CHANNELS_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;

export const SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const OFFSET_LIVE_CHAT = 25
