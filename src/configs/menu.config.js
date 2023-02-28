import HomeOutLinedIcon from "@mui/icons-material/HomeMaxOutlined"
import SlideshowOutLinedIcon from "@mui/icons-material/SlideshowOutlined"
import LiveTvOutLinedIcon from "@mui/icons-material/LiveTvOutlined"
import FavoriteBorderOutLinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import SearchOutLinedIcon from "@mui/icons-material/SearchOutlined"
import RateReviewOutLinedIcon from "@mui/icons-material/RateReviewOutlined"
import LockResetOutLinedIcon from "@mui/icons-material/LockResetOutlined"


const main = [
    {
        display: 'home',
        path: '/',
        icon: <HomeOutLinedIcon />,
        state: 'home'
    },
    {
        display: 'movie',
        path: '/movie',
        icon: <SlideshowOutLinedIcon />,
        state: 'movie'
    },
    {
        display: 'tv series',
        path: '/tv',
        icon: <LiveTvOutLinedIcon />,
        state: 'tv'
    },
    {
        display: 'search',
        path: '/search',
        icon: <SearchOutLinedIcon />,
        state: 'search'
    },
]

const user = [
    {
        display: 'favorites',
        path: '/favorites',
        icon: <FavoriteBorderOutLinedIcon />,
        state: 'favorite'
    },
    {
        display: 'reviews',
        path: '/reviews',
        icon: <RateReviewOutLinedIcon />,
        state: 'reviews'
    },
    {
        display: 'password update',
        path: '/password-update',
        icon: <LockResetOutLinedIcon />,
        state: 'password update'
    },
]

const menuConfigs = { main, user }

export default menuConfigs

