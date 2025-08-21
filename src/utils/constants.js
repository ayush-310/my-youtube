
export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=10&maxResults=50&key=' + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=";