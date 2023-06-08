import Header from '../components/Header.js'
import { Container, Typography, Stack, Button, Drawer } from '@mui/material'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export function Home() {
    /* Example API result from my sets */
    const test_user_sets_result = [
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
        }]

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
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
                <Stack spacing={2} sx={{ p: 2 }}>
                    {test_user_sets_result.map((set) => (
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
                <Box sx={{ flexGrow: 1 }}>
                {/* Main content */}
                </Box>
            </Box>
            </Box>
        </>
    )
}