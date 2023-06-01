import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

export default function Header() {

    const user = {
        username: "John Doe",
        usertype: "Student",
        profilePicture: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww&w=1000&q=80",
        description: "I am a student at the University of Backwadaba studying boobadabeedo.",
        studySets: ['Algebra 1', 'Spanish 2', 'English 2', 'Physics 2', 'American History']
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className='header'>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                            <SchoolIcon href="/home" />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 0, fontFamily: 'Rubik' }}>
                            NexusSurge
                        </Typography>
                        <Stack direction='row' spacing = {1} sx={{ fontFamily: 'Rubik' }}>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/home'></Button>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/home'>Home</Button>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/about'>About</Button>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/sets'>Sets</Button>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/study'>Study</Button>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' href='/profile'>Profile</Button>
                        </Stack>
                        <Stack direction='row' spacing={1} sx={{ ml: 'auto' }}>
                            <Button sx={{ fontFamily: 'Rubik' }} color='inherit' onClick={handleClick}>
                                <img src={user.profilePicture} alt='Profile' style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
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
                    </Toolbar>
                </AppBar>
            </div>
        </Box>
    )
}