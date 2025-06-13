import React, { useEffect, useState } from 'react'
import VideoCard from './Component/VideoCard'

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=programming&type=video&key=" + API_KEY
      );
      const data = await response.json();
      setVideos(data.items);
    };
    fetchVideos();
  }, [API_KEY]);

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '16px' }}>
      {selectedVideoId && (
        <div style={{ marginBottom: '16px' }}>
          <iframe
            width="100%"
            height="400"
            src={"https://www.youtube.com/embed/" + selectedVideoId}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            thumbnail={video.snippet.thumbnails.medium.url} // Or .high.url
            profileIcon={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            views="N/A" // View count is not directly available from the /search API endpoint
            time={video.snippet.publishedAt}
            onClick={() => handleVideoClick(video.id.videoId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
