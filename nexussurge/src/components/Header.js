import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import '../App.css';

export default function Header() {
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
                    </Toolbar>
                </AppBar>
            </div>
        </Box>
    )
}