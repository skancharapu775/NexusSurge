import '../App.css';
import React, { useState } from 'react';
import { Drawer, Typography, Stack, Card, CardContent, CardActions, Divider, Button, Box, TextField } from '@mui/material';

export default function SideDrawer({ sets }) {
  const [searchText, setSearchText] = useState('');

  const filteredSets = sets.filter((set) =>
    set.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
  const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
  const sbcolor = getComputedStyle(document.documentElement).getPropertyValue('--box-color');
  const btcolor = getComputedStyle(document.documentElement).getPropertyValue('--button-color'); 

  return (
    <Drawer
      sx={{ 
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 300,
          boxSizing: 'border-box',
          marginTop: '64px',
          paddingLeft: '16px',
          overflowY: 'scroll', // Enable scrolling
          '-ms-overflow-style': 'none', // Hide scrollbar, edge
          backgroundColor: sbcolor,
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar, chrome
          },
          scrollbarWidth: 'none', // Hide scrollbar, firefox
        },
      }}
      variant="permanent"
      anchor="left">
      <Box sx={{ p: 2, backgroundColor: sbcolor }}>
        <Typography color={fcolor} variant="h6" sx = {{ fontFamily: 'Rubik', backgroundColor: sbcolor }}>
          Choose Database Set
        </Typography>
        <TextField
          id="searchbar"
          sx = {{ fontFamily: 'Rubik', backgroundColor: fcolor, borderRadius: '8px', mt: '.5vh', input: { color: bcolor }}}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </Box>
      <Divider />
      <Typography color={fcolor} variant="h6" sx={{ p: 2, fontFamily: 'Rubik', backgroundColor: sbcolor }} >
        Choose Personal Set
        </Typography>
        <Divider />
      <Stack spacing={2} sx={{ p: 2, paddingBottom: '75px', backgroundColor: sbcolor }}>
        {filteredSets.map((set) => (
          <Card key={set.id} sx={{backgroundColor: scolor}}>
            <CardContent>
              <Typography color={fcolor} variant="h6" component="div" sx = {{ fontFamily: 'Rubik', backgroundcolor: fcolor }}>
                {set.title}
              </Typography>
              <Typography color={fcolor} variant="body2" sx = {{ fontFamily: 'Rubik' }}>
                {set.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button id="setbutton" variant="contained" color="secondary" size="small" sx = {{ fontFamily: 'Rubik' , backgroundColor: btcolor , color: fcolor}}>Select</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Drawer>
  );
}