const fetchYoutubeTitle = async (url) => {
  const videoId = url.split('v=')[1];
  const api_key = 'AIzaSyBjoQjAJbpNBSlnktu2iVyOSYiLUlYU4CM';
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${api_key}&part=snippet`
  );
  const data = await response.json();
  const videoTitle = data.items[0].snippet.title;
  return videoTitle;
};

export default fetchYoutubeTitle;
