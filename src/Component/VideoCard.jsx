import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const VideoCard = ({ 
  videoId,
  thumbnail,
  profileIcon, 
  title, 
  channelName, 
  views, 
  time,
  onClick
}) => {
  return (
    <Box 
      sx={{ width: 450,height: 330, cursor: 'pointer', color: 'black', bgcolor: 'white', borderRadius: '12px', overflow: 'hidden' }}
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <Box
        component="img"
        src={thumbnail}
        alt={title}
        sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '12px' }}
      />

      {/* Info Section */}
      <Box sx={{ display: 'flex', p: 1 }}>
        {/* Profile Icon */}
        <Avatar src={profileIcon} alt={channelName} sx={{ width: 36, height: 36, mr: 1 }} />

        {/* Text Info */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black', mb: 0.5, lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#black', mb: 0.3 }}>
            {channelName} <span style={{ marginLeft: 4 }}>✔️</span>
          </Typography>
          <Typography variant="body2" sx={{ color: '#grey' }}>
            {views} views • {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
