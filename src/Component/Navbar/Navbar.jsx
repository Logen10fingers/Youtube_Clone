import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExploreIcon from '@mui/icons-material/Explore'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MovieIcon from '@mui/icons-material/Movie'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FeedIcon from '@mui/icons-material/Feed'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SchoolIcon from '@mui/icons-material/School'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import YouTubeIcon from '@mui/icons-material/YouTube'
import navcss from './Navbar.module.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'black', // Changed to black
  '&:hover': {
    backgroundColor: '#222222', // Slightly lighter black for hover
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}))

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  // YouTube-style sidebar menu (2025)
  const sidebarMenu = [
    // Main
    { text: 'Home', icon: <HomeIcon color="error" /> },
    { text: 'Shorts', icon: <WhatshotIcon color="error" /> },
    { text: 'Subscriptions', icon: <SubscriptionsIcon color="error" /> },
    { divider: true },
    // You section
    { text: 'You', icon: <Avatar sx={{ width: 24, height: 24 }} /> },
    { text: 'History', icon: <HistoryIcon /> },
    { text: 'Your videos', icon: <SlideshowIcon /> },
    { text: 'Watch later', icon: <WatchLaterIcon /> },
    { text: 'Liked videos', icon: <ThumbUpIcon /> },
    { text: 'Show more', icon: <ExpandMoreIcon /> },
    { divider: true },
    // Explore
    { text: 'Explore', icon: <ExploreIcon /> },
    { text: 'Trending', icon: <LocalFireDepartmentIcon /> },
    { text: 'Shopping', icon: <ShoppingBagIcon /> },
    { text: 'Music', icon: <MusicNoteIcon /> },
    { text: 'Movies & TV', icon: <MovieIcon /> },
    { text: 'Live', icon: <LiveTvIcon /> },
    { text: 'Gaming', icon: <SportsEsportsIcon /> },
    { text: 'News', icon: <FeedIcon /> },
    { text: 'Sports', icon: <EmojiEventsIcon /> },
    { text: 'Learning', icon: <SchoolIcon /> },
    { text: 'Fashion & Beauty', icon: <CheckroomIcon /> },
    { divider: true },
    // More from YouTube
    { text: 'YouTube Premium', icon: <YouTubeIcon color="error" /> },
    { text: 'YouTube Music', icon: <MusicNoteIcon color="error" /> },
    { text: 'YouTube Kids', icon: <YouTubeIcon color="primary" /> },
    { text: 'YouTube TV', icon: <LiveTvIcon color="primary" /> },
  ]

  const drawerList = (
    <Box
      sx={{ width: 240, pt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarMenu.map((item, idx) =>
          item.divider ? (
            <Divider key={idx} sx={{ my: 1 }} />
          ) : (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} YouTube Clone
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white' }} elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left: Hamburger + YouTube Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              sx={{ mr: 1 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
              alt="YouTube"
              style={{ height: 28, marginRight: 16 }}
            />
          </Box>

          {/* Center: Search Bar */}
          <Box sx={{ flexGrow: 1, maxWidth: 600, mx: 2 }} className={navcss.search_main_box}>
            <Search className={navcss.search_box}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                borderRadius="20px"
                sx={{ color: 'black' }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          {/* Right: Icons + Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="black">
              <VideoCallIcon />
            </IconButton>
            <IconButton color="black">
              <AppsIcon />
            </IconButton>
            <IconButton color="black">
              <NotificationsIcon />
            </IconButton>
            <Avatar
              alt="User"
              src="https://avatarfiles.alphacoders.com/894/89415.jpg"
              sx={{ width: 32, height: 32, ml: 1 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </Box>
  )
}

export default Navbar