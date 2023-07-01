import * as React from 'react';
import Header from '../components/Header.js'
import { Box, Typography, Button, Grid, Divider, Stack, Chip } from '@mui/material'

const user = {
    username: "John Doe",
    usertype: "Student",
    profilePicture: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww&w=1000&q=80",
    description: "I am a student at the University of Backwadaba studying boobadabeedo.",
    studySets: ['Algebra 1', 'Spanish 2', 'English 2', 'Physics 2', 'American History']
}

const pfcolor = getComputedStyle(document.documentElement).getPropertyValue('--profile-color');
const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');

export function Profile() {
  return (
    <>
        <Header />
        {/* two separated sections */}
        <div className="body-content" style={{ display: 'flex', justifyContent: 'space-between' , backgroundColor:pfcolor}}>
            <Box sx={{ width: '100%', maxWidth: '80vw', bgcolor: pfcolor, backgroundColor: pfcolor }}>
                <Box sx={{ my: 5, mx: 2 }}>
                <Grid container justifyContent="center" sx={{ mb: 2, my: 2 }}>
                    <Grid item xs={1}>
                        <Box sx={{ borderRadius: '50%', overflow: 'hidden', mb: 2 }}>
                        <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                            <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                            <img src={user.profilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs sx={{display: 'flex', alignItems: 'center'}}>
                        <Box>
                        <Typography gutterBottom variant="h3" component="div" sx={{ fontFamily: 'Rubik', mb: 1 }}>
                            &nbsp;{user.username}
                        </Typography>
                        </Box>
                        <Box sx={{ ml: 'auto' }}>
                        <Typography gutterBottom variant="p" component="div" sx={{ fontFamily: 'Rubik', mt: 1 }}>
                            {user.usertype}
                        </Typography>
                        </Box>
                    </Grid>
                    </Grid>
                    <Box ml={2}>
                        <Typography color="text.secondary" variant="body2" sx={{ fontFamily: 'Rubik', mb: 2, color: fcolor }}>
                            {user.description}
                        </Typography>
                    </Box>
                </Box>
                <Divider variant="middle" sx={{ bgcolor: fcolor }}/>
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1" sx={{ fontFamily: 'Rubik', mb: 2 }}>
                        Study Sets
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {/* map chips to study sets */}
                        {user.studySets.map((studySet) => (
                            <Chip label={studySet} sx = { { backgroundColor: scolor, color: fcolor} } />
                        ))}
                    </Stack>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button>Edit Profile</Button>
                </Box>
            </Box>
        </div>
    </>
  );
}