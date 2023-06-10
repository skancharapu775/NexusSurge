import React from 'react';
import { Box, Divider, Grid, TextField, Typography, Button } from '@mui/material';
import Header from '../components/Header.js';
import '../App.css';

export function Study() {
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
      <Box sx={{ display: 'flex', flexGrow: 1, height: '100%', marginTop: '8vh', fontFamily: 'Rubik, sans-serif' }}>
        <Box sx={{ width: '50%', borderRight: 1, borderColor: 'divider', height: '100vh', fontFamily: 'Rubik, sans-serif', marginTop:'25px'}}>
          <Typography variant="h3" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 0, textAlign: 'center' }}>
            Study Sets
          </Typography>
          <Box sx={{ p: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Typography variant="h5" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 2, textAlign: 'center' }}>
              Your Sets
            </Typography>
            <Box sx={{ overflowY: 'scroll', maxHeight: '60vh' }}>
            <Grid container spacing={2}>
              {studySets.map((set) => (
                <Grid sx = {{marginBottom: '2rem'}} item xs={12} sm={6} md={4} key={set.name}>
                  <Box
                    sx={{
                      p: 2,
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      fontFamily: 'Rubik',
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'center' }}>
                      {set.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Rubik', textAlign: 'center' }}>
                      {set.num_cards} cards
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained">Study</Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '50%', height: '100%', fontFamily: 'Rubik, sans-serif', marginTop:'25px'}}>
          <Typography variant="h3" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 0, textAlign: 'center' }}>
            Worksheets
          </Typography>
          <Box sx={{ p: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Typography variant="h5" sx={{ p: 2, fontFamily: 'Rubik', paddingBottom: 2, textAlign: 'center' }}>
              Your Worksheets
            </Typography>
            <Box sx={{ overflowY: 'scroll', maxHeight: '60vh' }}>
              <Grid container spacing={2}>
                {worksheets.map((worksheet) => (
                  <Grid sx={{ marginBottom: '2rem' }} item xs={12} key={worksheet.id}>
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
                        alignItems: 'center',
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
                      <Button variant="outlined" sx={{ marginLeft: 'auto', '&:hover': { backgroundColor: 'primary.main', color: 'white' } }}>Download</Button>
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