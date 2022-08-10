import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import auth from "../apis/modules/auth";
import {useEffect} from "react";


const pages = ['Students', 'About Us', 'Contact Us'];
const settings = ['Logout'];

const AdminNavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({});

    useEffect(()=>{
        const getCurrentUser=async()=>{
            const respond = (await auth.currentUser()).data.data
            console.log(respond)
            setCurrentUser(respond)
        }
        getCurrentUser()
    },[])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = async()=>{
        try{
            await auth.logout()
        }catch (e) {
            alert('error')
        }
        localStorage.clear();
        window.location = '/'
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="102.958" height="32" viewBox="0 0 102.958 32" fill="#FF0001">
                        <g id="Navbar_Logo" fill="#FF0001" transform="translate(-65.2 -311.935)">
                            <path id="Path_1" d="M330.178,336.342a7.443,7.443,0,0,0,4.006,2.17,8.242,8.242,0,0,0,1.586.334,14.473,14.473,0,0,0,3-.063,7.1,7.1,0,0,0,2.337-.73,5.912,5.912,0,0,0,3.088-4.34,14.655,14.655,0,0,0,.146-1.649v-.438c-.167.125-.271.209-.376.292a9.8,9.8,0,0,1-6.907,2.212,10.011,10.011,0,0,1-8.472-5.488,11.413,11.413,0,0,1-1.127-3.088,12.706,12.706,0,0,1-.229-3.318,11.232,11.232,0,0,1,1.711-5.446,10.088,10.088,0,0,1,4.069-3.756,9.918,9.918,0,0,1,5.467-1.064,12.8,12.8,0,0,1,2.942.522,7.377,7.377,0,0,1,2.692,1.544c.063.063.125.1.23.209.313-.563.584-1.106.876-1.648h5.321v14.836c0,1.565-.021,3.13-.083,4.674a21.1,21.1,0,0,1-.5,4.132,9.171,9.171,0,0,1-4.278,5.843,11.112,11.112,0,0,1-4.006,1.5,18.69,18.69,0,0,1-4.82.313,13.117,13.117,0,0,1-2.546-.355,16.568,16.568,0,0,1-3.9-1.44.574.574,0,0,1-.355-.584c.021-1.628,0-3.255,0-4.883a1.793,1.793,0,0,1,.021-.334A.115.115,0,0,0,330.178,336.342Zm3.234-12.4a5.216,5.216,0,0,0,3.13,4.173,5.408,5.408,0,0,0,3.088.459,4.92,4.92,0,0,0,3.3-1.711,5.818,5.818,0,0,0,1.189-5.363,5.222,5.222,0,0,0-6.281-3.944C335.478,318,333.392,320.3,333.412,323.947Z" transform="translate(-207.343 0)" fill=""/>
                            <path id="Path_2"  d="M452.04,330.15a7.7,7.7,0,0,0,4.57.9,6.575,6.575,0,0,0,2.358-.793,15.738,15.738,0,0,0,4.361-3.589c.125-.146.25-.292.417-.459,1.21.751,2.421,1.482,3.652,2.233-.209.376-.376.73-.563,1.064a14.647,14.647,0,0,1-5.3,5.112,12.778,12.778,0,0,1-7.6,1.815,11.183,11.183,0,0,1-10.413-9.307,10.947,10.947,0,0,1-.083-3.4,11.329,11.329,0,0,1,8.159-9.641,9.538,9.538,0,0,1,3.61-.292,11.7,11.7,0,0,1,9.369,6.156,11.914,11.914,0,0,1,.981,2.358C461.076,324.892,456.589,327.5,452.04,330.15Zm-2.587-4.027c.5-.188,8.493-4.883,8.722-5.112a6.051,6.051,0,0,0-2.8-1.586,4.7,4.7,0,0,0-5.175,1.9,5.784,5.784,0,0,0-.96,2.9A5.321,5.321,0,0,0,449.453,326.123Z" transform="translate(-299.24 -1.424)" />
                            <path id="Path_3"  d="M165.357,316.749l.939,4.069c.647,2.8,1.294,5.572,1.941,8.368.626,2.671,1.252,5.321,1.857,7.992.021.063.021.125.042.23h-5.342c-.292-.563-.584-1.106-.9-1.69-.146.083-.271.167-.4.25a9.228,9.228,0,0,1-3.652,1.356,11.159,11.159,0,0,1-3.986-.25,7.8,7.8,0,0,1-4.069-2.337,7.651,7.651,0,0,1-1.982-4.34,18.632,18.632,0,0,1-.146-2.17c-.021-4.173,0-8.326,0-12.5v-.48c.334-.1,5.217-.125,6.239-.042,0,.146.021.313.021.48v12.374a4.921,4.921,0,0,0,.021.96,3.272,3.272,0,0,0,1.315,2.149,4.515,4.515,0,0,0,2.17.751,4.65,4.65,0,0,0,2.128-.313,3.6,3.6,0,0,0,2.337-3.422c-.021-4.153,0-8.305,0-12.458v-.542c2.421,0,4.82-.042,7.262.042-.334,2.692-.647,5.342-.981,7.971-.021,0-.042.021-.083.021-.271-.376-.522-.73-.793-1.106-1.273-1.795-2.546-3.589-3.84-5.363-.021-.042-.063-.063-.083-.083s-.063-.021-.083-.042A.126.126,0,0,1,165.357,316.749Z" transform="translate(-66.832 -2.546)"/>
                            <path id="Path_4"  d="M81.372,317.911c-1.607.543-3.193,1.064-4.779,1.607a3.367,3.367,0,0,0-.313-.543A3.2,3.2,0,0,0,73,317.828a2.048,2.048,0,0,0-1.377,1.419,1.316,1.316,0,0,0,.459,1.5,3.039,3.039,0,0,0,1.377.668c.48.083.981.146,1.461.25a15.07,15.07,0,0,1,3.881,1.252,7.532,7.532,0,0,1,1.857,1.273,5.354,5.354,0,0,1,1.648,3.109,6.462,6.462,0,0,1-2.734,6.552,9.213,9.213,0,0,1-4.236,1.774,10.4,10.4,0,0,1-8.055-1.92,5.95,5.95,0,0,1-1.962-2.4c-.042-.1-.083-.209-.125-.334,1.5-.73,2.984-1.461,4.424-2.17.355.334.689.689,1.043.981a3.159,3.159,0,0,0,1.5.668,5.962,5.962,0,0,0,2.108,0,2.529,2.529,0,0,0,1.711-1.231,1.133,1.133,0,0,0-.292-1.565,5.167,5.167,0,0,0-2.421-.939,14.357,14.357,0,0,1-3.38-.855,7.515,7.515,0,0,1-2.9-1.92,4.878,4.878,0,0,1-1.461-3.4,8.045,8.045,0,0,1,.292-2.9,7.116,7.116,0,0,1,2.921-3.693,8.336,8.336,0,0,1,2.9-1.252,8.853,8.853,0,0,1,2.775-.167,8.5,8.5,0,0,1,4.507,1.815A7.1,7.1,0,0,1,81.372,317.911Z" transform="translate(0 -0.433)"/>
                            <path id="Path_5"  d="M262.351,315.85c.167,0,.209-.167.292-.271a7.868,7.868,0,0,1,1.982-2,6.8,6.8,0,0,1,2.859-1.127,11.158,11.158,0,0,1,4.549.292c.146.042.292.083.5.125-.1.918-.188,1.836-.313,2.754a27.155,27.155,0,0,1-.334,2.775c-.313-.063-.626-.146-.918-.209a8.121,8.121,0,0,0-5.342.522,5.442,5.442,0,0,0-3.13,3.652,2.823,2.823,0,0,0-.1.605c0,3.923-.021,7.867-.021,11.79,0,.125-.021.271-.021.438H256.8v-8.556c1.336,1.732,2.608,3.443,3.965,5.2,0-.271.021-.459,0-.647-.355-2.17-.71-4.32-1.064-6.49-.459-2.754-.918-5.509-1.377-8.242l-.5-3.13a1.908,1.908,0,0,1-.021-.355h4.048C262,313.909,262.184,314.869,262.351,315.85Z" transform="translate(-151.619 -0.312)" />
                        </g>
                    </svg>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp">
                                    {currentUser ? currentUser.first_name.toUpperCase().split('')[0] + currentUser.first_name.toUpperCase().split('')[1]:''}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={logout}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default AdminNavBar;
