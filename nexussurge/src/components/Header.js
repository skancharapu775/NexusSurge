import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

export default function Header() {

    {/* figure out how sessions work to do this well */}
    const logged_in = true;

    const user = {
        username: "John Doe",
        usertype: "Student",
        profilePicture: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww&w=1000&q=80",
        description: "I am a student at the University of Backwadaba studying boobadabeedo.",
        studySets: ['Algebra 1', 'Spanish 2', 'English 2', 'Physics 2', 'American History']
    }
    const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
    const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    const tbcolor = getComputedStyle(document.documentElement).getPropertyValue('--toolbar-color');

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const length = user.username.length;
    const leftMargin = (164 - 1.1 * length);

    return (
        <Box sx={{ flexGrow: 1}}>
            <div>
                <AppBar id="hd"sx={{backgroundColor:bcolor, color:fcolor}}>
                    <div><Toolbar sx={{borderBottom: '2px solid ' + tbcolor }}>
                        <IconButton sx={{ position:'fixed' }}size='large' edge='start' color='inherit' aria-label='logo.svg'>
                            <SchoolIcon href="/home" />
                        </IconButton>
                        <Typography position='fixed' variant='h6' component='div' sx={{ flexGrow: 0, fontFamily: 'Rubik', ml: '2%' }}>
                            NexusSurge
                        </Typography>
                        <Stack position='fixed' direction='row' spacing = {1} sx={{ fontFamily: 'Rubik', ml: '38%' }}>
                            <Button id="hbtn" sx={{ fontFamily: 'Rubik' }} color='inherit' href='/home'>Home</Button>
                            <Button id="hbtn" sx={{ fontFamily: 'Rubik' }} color='inherit' href='/add'>Add</Button>
                            <Button id="hbtn" sx={{ fontFamily: 'Rubik' }} color='inherit' href='/study'>Study</Button>
                            <Button id="hbtn" sx={{ fontFamily: 'Rubik' }} color='inherit' href='/profile'>Profile</Button>
                        </Stack>
                        {logged_in ? (
                            <Stack position='fixed' direction='row' spacing={1} sx={{ ml: leftMargin }}> {/* profile button*/}
                                <Button sx={{ fontFamily: 'Rubik' }} color='inherit' onClick={handleClick}>
                                    <Typography color={fcolor} variant="h8" component="div" sx = {{ fontFamily: 'Rubik', backgroundcolor: fcolor }}>
                                        { user.username }
                                    </Typography>
                                    <img src={user.profilePicture} alt='Profile' style={{ borderRadius: '50%', width: '30px', height: '30px', marginLeft: '1vw' }} />
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    </Link>
                                    {/* needs to be updated when possible */}
                                    <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Stack>
                        ) : (
                            <Stack position='fixed' direction='row' spacing={1} sx={{ ml: '92.5%' }}>
                                <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/login'>Login</Button>
                            </Stack>
                        )}
                    </Toolbar></div>
                </AppBar>
                
            </div>
        </Box>
    )
}
