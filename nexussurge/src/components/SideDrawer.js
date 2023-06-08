import React from 'react';
import { Drawer, Typography, Stack, Card, CardContent, CardActions, Divider, Button, Box } from '@mui/material';

export default function SideDrawer({ sets }) {
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
        <Typography variant="h6" gutterBottom>
          Choose Sets
        </Typography>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ p: 2, paddingBottom: '75px' }}>
        {sets.map((set) => (
          <Card key={set.id}>
            <CardContent>
              <Typography variant="h6" component="div">
                {set.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {set.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Study</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Drawer>
  );
}