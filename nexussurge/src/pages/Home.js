import Header from '../components/Header.js';
import { Container, Typography, Stack, Button, Drawer, Grid, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SideDrawer from '../components/SideDrawer.js';
import '../App.css';

export function Home() {
  /* Example API result from my sets */
  const test_user_sets_result = [
    {
      title: 'Test Set 1 - Personal',
      description: 'This is a test set',
      creator: 'Test User 1',
      num_cards: 10,
      id: 1,
    },
    {
      title: 'Test Set 2 - Personal',
      description: 'This is a test set',
      creator: 'Test User 2',
      num_cards: 10,
      id: 2,
    },
    {
      title: 'Test Set 3 - Personal',
      description: 'This is a test set',
      creator: 'Test User 3',
      num_cards: 10,
      id: 3,
    },
    {
      title: 'Test Set 4 - Personal',
      description: 'This is a test set',
      creator: 'Test User 4',
      num_cards: 10,
      id: 4,
    },
    {
      title: 'Test Set 5 - Personal',
      description: 'This is a test set',
      creator: 'Test User 5',
      num_cards: 10,
      id: 5,
    },
  ];

  const card_data_example = [
    {
        title: 'HomePage Card 1',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 2',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 3',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 4',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 5',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 6',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 7',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 8',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 9',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 10',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 11',
        description: 'This is a test card',
        link: 'https://example.com'
    },
    {
        title: 'HomePage Card 12',
        description: 'This is a test card',
        link: 'https://example.com'
    }
  ]

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ display: 'flex' }}>
            <SideDrawer sets={test_user_sets_result} />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 10, paddingTop: 5, paddingRight: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                </Box>
                <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center' }}>
                {card_data_example.map((card, index) => (
                    <Grid item xs={3} key={index}>
                    <a href={card.link} className='card-link'>
                        <Card className='center-card' sx={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' } }} onClick={() => window.location.href=card.link}>
                        <CardContent className='card-content'>
                            <Typography variant="h5" component="h2" d>
                            {card.title}
                            </Typography>
                            <Typography color="textSecondary">
                            {card.description}
                            </Typography>
                        </CardContent>
                        </Card>
                    </a>
                    </Grid>
                ))}
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, paddingRight: '6vw', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="contained" color="primary" size="large" sx={{ m: 3, fontSize: 20, padding: '16px' }}>Create Party</Button>
                    <Button variant="contained" color="secondary" size="large" sx={{ m: 3, fontSize: 20, padding: '16px' }}>Custom Settings</Button>
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  );
}
