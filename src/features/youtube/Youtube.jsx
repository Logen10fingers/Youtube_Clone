import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [videos, setVideos] = useState([])
const API_KEY = import.meta.env.VITE_API_KEY
// const API_KEY="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"

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              key: API_KEY,
              q: 'mango',        // Search query
              part: 'snippet',
              maxResults: 10,
              type: 'video'
            }
          }
        )
        setVideos(response.data.items)
      } catch (error) {
        console.error(error)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div>
      <h2>YouTube Videos</h2>
      <ul>
        {videos.map((item) => (
          <li key={item.id.videoId}>
            {/* <a
              href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
             
            </a> */}

            <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} 
            title={item.snippet.title}
            width="350"
            height="200"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
            
            />
             
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App