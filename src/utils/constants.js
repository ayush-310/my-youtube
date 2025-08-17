export const GOOGLE_API_KEY = "AIzaSyBwzMMJBWdUzArAi25WNATkufI67lIqq_0";

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' + GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="