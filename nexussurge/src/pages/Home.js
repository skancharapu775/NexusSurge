import Header from '../components/Header.js';
import { Container, Typography, Stack, Button, Drawer, Grid, Card, CardContent, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SideDrawer from '../components/SideDrawer.js';
import '../App.css';

export function Home() {

  const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
  const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
  const btcolor = getComputedStyle(document.documentElement).getPropertyValue('--button-color');

  /* Example API result from my sets */
  const test_user_sets_result = [
    {
      title: 'Test Set 1',
      description: 'This is a test set',
      creator: 'Test User 1',
      num_cards: 10,
      id: 1,
    },
    {
      title: 'Test Set 2',
      description: 'This is a test set',
      creator: 'Test User 2',
      num_cards: 10,
      id: 2,
    },
    {
      title: 'Test Set 3',
      description: 'This is a test set',
      creator: 'Test User 3',
      num_cards: 10,
      id: 3,
    },
    {
      title: 'Test Set 4',
      description: 'This is a test set',
      creator: 'Test User 4',
      num_cards: 10,
      id: 4,
    },
    {
      title: 'Test Set 5',
      description: 'This is a test set',
      creator: 'Test User 5',
      num_cards: 10,
      id: 5,
    },
  ];

  const card_data_example = [
    {
      title: 'Game 1',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Game 2',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Game 3',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Flashcards',
      description: 'Flashcards link',
      link: 'https://example.com'
    },
    {
      title: 'Learn',
      description: 'learn link',
      link: 'https://example.com'
    },
    {
      title: 'Test',
      description: 'test link',
      link: 'https://example.com'
    },
    {
      title: 'Game 7',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Game 8',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Game 9',
      description: 'This is a test card',
      link: 'https://example.com'
    },
    {
      title: 'Game 10',
      description: 'This is a test card',
      link: 'https://example.com'
    }
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className='home-body'>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', boxShadow: '5px 0px 5px rgba(0, 0, 0, 0.12)', height: '100vh' }}>
            <SideDrawer sets={test_user_sets_result} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 10, paddingTop: 5, paddingRight: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            </Box>
            <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center', paddingTop: '7.5vh' }}>
              <Grid item xs={12}>
                <a href='https://example.com' className='card-link'>
                  <Card className='center-card' sx={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: scolor }, backgroundColor: scolor }} onClick={() => window.location.href='https://example.com'}>
                    <CardContent className='card-content'>
                      <Typography color={fcolor} variant="h5" component="h2" d sx = {{ fontFamily: 'Rubik' }}>
                        Main Game
                      </Typography>
                      <Typography color={fcolor} sx = {{ fontFamily: 'Rubik' }}>
                        Main Game Card
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Grid>
              {card_data_example.slice(0, 3).map((card, index) => (
                <Grid item xs={4} key={index}>
                  <a href={card.link} className='card-link'>
                    <Card className='center-card' sx={{ minHeight: '125px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: scolor }, backgroundColor: scolor }} onClick={() => window.location.href=card.link}>
                      <CardContent className='card-content'>
                        <Typography color={fcolor} variant="h5" component="h2" d sx = {{ fontFamily: 'Rubik' }}>
                          {card.title}
                        </Typography>
                        <Typography color={fcolor} sx = {{ fontFamily: 'Rubik' }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              ))}
              <Grid item xs={12} sx={{ paddingTop: '7.5vh' }}>
                <Divider sx={{ backgroundColor: fcolor }} />
              </Grid>
              {card_data_example.slice(3, 6).map((card, index) => (
                <Grid item xs={4} key={index}>
                  <a href={card.link} className='card-link'>
                    <Card className='center-card' sx={{ minHeight: '125px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: scolor }, backgroundColor: scolor }} onClick={() => window.location.href=card.link}>
                      <CardContent className='card-content'>
                        <Typography color={fcolor} variant="h5" component="h2" d sx = {{ fontFamily: 'Rubik' }}>
                          {card.title}
                        </Typography>
                        <Typography color={fcolor} sx = {{ fontFamily: 'Rubik' }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, paddingBottom: '8vw', paddingRight: '6vw', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button variant="contained" size="large" sx={{ m: 3, fontSize: 20, padding: '16px', fontFamily: 'Rubik' , color:fcolor, backgroundColor:btcolor }}>Create Party</Button>
              <Button variant="contained" size="large" sx={{ m: 3, fontSize: 20, padding: '16px', fontFamily: 'Rubik', color:fcolor, backgroundColor:btcolor }}>Custom Settings</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}