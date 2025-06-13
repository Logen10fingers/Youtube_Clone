import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const categories = [
  'All',
  'Data Structures',
  'Computer programming',
  'Music',
  'Traveling',
  'Gaming',
  'Disha Vakani',
  'News',
  'Live',
  'Mixes',
  'Universities',
  'Drum',
  'Safaris',
  'Calculation',
];

const CategoriesBar = () => {
  const scrollRef = React.useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'white',
        px: 3,
        py: 1,
        overflow: 'hidden',
      }}
    >
      <IconButton
        onClick={() => scroll(-150)}
        sx={{ color: 'black', mr: 1, display: { xs: 'none', sm: 'flex' } }}
        aria-label="scroll left"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari
          gap: 1,
          flexGrow: 1,
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: '20px',
              bgcolor: 'black',
              color: 'white',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              '&:hover': {
                bgcolor: 'black',
              },
              px: 2,
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      <IconButton
        onClick={() => scroll(150)}
        sx={{ color: 'black', ml: 1, display: { xs: 'none', sm: 'flex' } }}
        aria-label="scroll right"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CategoriesBar;
