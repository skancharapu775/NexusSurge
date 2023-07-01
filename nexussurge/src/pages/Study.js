import React from 'react';
import { Box, Divider, Grid, TextField, Typography, Button } from '@mui/material';
import Header from '../components/Header.js';
import '../App.css';

export function Study() {

  const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
  const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
  const sbcolor = getComputedStyle(document.documentElement).getPropertyValue('--box-color');
  const btcolor = getComputedStyle(document.documentElement).getPropertyValue('--button-color');
  const bscolor = getComputedStyle(document.documentElement).getPropertyValue('--base-secondary');

  const studySets = [
    {
        title: "Test Set 1 - Personal",
        description: "This is a test set",
        creator: "Test User 1",
        num_cards: 10,
        id: 1
    },
    {
        title: "Test Set 2 - Personal",
        description: "This is a test set",
        creator: "Test User 2",
        num_cards: 10,
        id: 2
    },
    {
        title: "Test Set 3 - Personal",
        description: "This is a test set",
        creator: "Test User 3",
        num_cards: 10,
        id: 3
    },
    {
        title: "Test Set 4 - Personal",
        description: "This is a test set",
        creator: "Test User 4",
        num_cards: 10,
        id: 4
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    },
    {
        title: "Test Set 5 - Personal",
        description: "This is a test set",
        creator: "Test User 5",
        num_cards: 10,
        id: 5
    }
  ]

  const worksheets = [
    {
        title: "WS 1",
        description: "This is a test WS",
        creator: "Test User 1",
        num_problems: 10,
        id: 1
    },
    {
        title: "WS 2",
        description: "This is a test WS",
        creator: "Test User 2",
        num_problems: 10,
        id: 2
    },
    {
        title: "WS 3",
        description: "This is a test WS",
        creator: "Test User 3",
        num_problems: 10,
        id: 3
    },
    {
        title: "WS 4",
        description: "This is a test WS",
        creator: "Test User 4",
        num_problems: 10,
        id: 4
    },
    {
        title: "WS 5",
        description: "This is a test WS",
        creator: "Test User 5",
        num_problems: 10,
        id: 5
    },
    {
      title: "WS 6",
      description: "This is a test WS",
      creator: "Test User 6",
      num_problems: 10,
      id: 6
  }
  ]

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, height: '100%', marginTop: '8vh', fontFamily: 'Rubik, sans-serif', backgroundColor: bscolor }}>
        <Box sx={{ width: '50%', borderRight: 1, borderColor: 'divider', height: '100vh', fontFamily: 'Rubik, sans-serif', marginTop:'25px'}}>
          <Typography variant="h3" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 0, textAlign: 'center' }}>
            Study Sets
          </Typography>
          <Box sx={{ p: 2 }}>
 
            <Typography variant="h5" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 2, textAlign: 'center' }}>
              Your Sets
            </Typography>
            <Box sx={{ overflowY: 'scroll', maxHeight: '60vh' }}>
            <Grid container spacing={2}>
              {studySets.map((set) => (
                <Grid sx = {{marginBottom: '2rem'}} item xs={12} key={set.name}>
                  <Box
                    sx={{
                      p: 2,
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      fontFamily: 'Rubik',
                      backgroundColor: scolor,
                      marginLeft: '5vh',
                      marginRight: '5vh'
                    }}
                  >

                    <Box sx={{ flexGrow: 1, width: '50vh', marginBottom: '-5vh' }}>  
                    <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'center' }}>
                      {set.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'center' }}>
                      {set.num_cards} terms
                    </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" sx = { { backgroundColor: btcolor, height: '100%' } }>Study</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" sx = { { backgroundColor: btcolor, width: '15%' } }>Join Game</Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '50%', height: '100%', fontFamily: 'Rubik, sans-serif', marginTop:'25px' }}>
          <Typography variant="h3" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 0, textAlign: 'center' }}>
            Tests/Worksheets
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 2, textAlign: 'center' }}>
              Your Tests/Worksheets
            </Typography>
            <Box sx={{ overflowY: 'scroll', maxHeight: '60vh' }}>
              <Grid container spacing={2}>
                {worksheets.map((worksheet) => (
                  <Grid sx={{ marginBottom: '2rem' }} item xs={6} key={worksheet.id}>
                    <Box
                      sx={ {
                        p: 2,
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        fontFamily: 'Rubik',
                        alignItems: 'center',
                        backgroundColor: scolor,
                        marginLeft: '4vh',
                        marginRight: '4vh'
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'left' }}>
                          {worksheet.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'left' }}>
                          {worksheet.num_problems} problems
                        </Typography>
                      </Box>
                      <Button variant="contained" sx={{ backgroundColor: btcolor, marginLeft: 'auto', '&:hover': { backgroundColor: 'primary.main', color: fcolor } }}>Download</Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}