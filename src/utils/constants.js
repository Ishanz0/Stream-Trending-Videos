// export const API_KEY = "AIzaSyDXSeQ24huRfjfykCnFjNCrjXi1Z7NEIrk";

// export const API_KEY = "AIzaSyAlAm0xY9A9HE5YPyRPjNuhpbGOfeiyYcM";

export const API_KEY = "AIzaSyA6FlcvcBMBNbEkx3ABHQv_hZ8ZqL0_zC0";

export const VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const CHANNELS_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;

export const SEARCH_SUGGESTIONS =
  "https://cors-proxy.fringe.zone/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const OFFSET_LIVE_CHAT = 25;
