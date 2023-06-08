import React, { useState } from 'react';
import { Drawer, Typography, Stack, Card, CardContent, CardActions, Divider, Button, Box, TextField } from '@mui/material';

export default function SideDrawer({ sets }) {
  const [searchText, setSearchText] = useState('');

  const filteredSets = sets.filter((set) =>
    set.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          marginTop: '64px',
          paddingLeft: '16px',
          overflowY: 'scroll', // Enable scrolling
          '-ms-overflow-style': 'none', // Hide scrollbar, edge
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar, chrome
          },
          scrollbarWidth: 'none', // Hide scrollbar, firefox
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx = {{ fontFamily: 'Rubik' }}>
          Find New Sets
        </Typography>
        <TextField
          sx = {{ fontFamily: 'Rubik' }}
          label="Search"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </Box>
      <Divider />
      <Typography variant="h6" sx={{ p: 2, fontFamily: 'Rubik' }} >
        Your Sets
        </Typography>
        <Divider />
      <Stack spacing={2} sx={{ p: 2, paddingBottom: '75px' }}>
        {filteredSets.map((set) => (
          <Card key={set.id}>
            <CardContent>
              <Typography variant="h6" component="div" sx = {{ fontFamily: 'Rubik' }}>
                {set.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx = {{ fontFamily: 'Rubik' }}>
                {set.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx = {{ fontFamily: 'Rubik' }}>Study</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Drawer>
  );
}