import Header from '../components/Header.js'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../App.css'

export function Sets() {

    /* Example API result from searching database */
    const test_search_results = [
        {
            title: "Test Set 1 - Search",
            description: "This is a test set",
            creator: "Test User 1",
            num_cards: 10,
            id: 1
        },
        {
            title: "Test Set 2 - Search",
            description: "This is a test set",
            creator: "Test User 2",
            num_cards: 10,
            id: 2
        },
        {
            title: "Test Set 3 - Search",
            description: "This is a test set",
            creator: "Test User 3",
            num_cards: 10,
            id: 3
        },
        {
            title: "Test Set 4 - Search",
            description: "This is a test set",
            creator: "Test User 4",
            num_cards: 10,
            id: 4
        },
        {
            title: "Test Set 5 - Search",
            description: "This is a test set",
            creator: "Test User 5",
            num_cards: 10,
            id: 5
        }]

    /* Example API result from popular sets */
    const test_popular_results = [
        {
            title: "Test Set 1 - Popular",
            description: "This is a test set",
            creator: "Test User 1",
            num_cards: 10,
            id: 1
        },
        {
            title: "Test Set 2 - Popular",
            description: "This is a test set",
            creator: "Test User 2",
            num_cards: 10,
            id: 2
        },
        {
            title: "Test Set 3 - Popular",
            description: "This is a test set",
            creator: "Test User 3",
            num_cards: 10,
            id: 3
        },
        {
            title: "Test Set 4 - Popular",
            description: "This is a test set",
            creator: "Test User 4",
            num_cards: 10,
            id: 4
        },
        {
            title: "Test Set 5 - Popular",
            description: "This is a test set",
            creator: "Test User 5",
            num_cards: 10,
            id: 5
        }]

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
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'}>
                        Saved Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '80vh', overflow: 'auto', marginTop: '10px' }}>
                        {test_user_sets_result.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', height: '10vh', padding: '1vh', border: '1px solid black', marginBottom: '1vh' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5">{result.title}</Typography>
                                    <Typography variant="subtitle1">{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh', backgroundColor: 'black' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'}>
                        Database
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '80vh' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: '80vh' }}>
                      <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: '180%', height: '5vh' }} />
                      <Button variant="contained" sx={{ width: '180%', height: '5vh', marginTop: '10px', marginBottom: '5px' }}>Search</Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '80vh', overflow: 'auto', marginTop: '-340px' }}>
                       <Box sx={{ display: 'flex', flexDirection: 'row', width: '90%', height: '9vh', padding: '2vh', border: '2px solid black', marginBottom: '1vh'}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5">Search for flashcard sets and worksheets made by other users!</Typography>
                                </Box>
                        </Box>
                    </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh', backgroundColor: 'black' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'}>
                        Trending Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '80vh', overflow: 'auto', marginTop: '10px' }}>
                        {test_popular_results.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', height: '10vh', padding: '1vh', border: '1px solid black', marginBottom: '1vh' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5">{result.title}</Typography>
                                    <Typography variant="subtitle1">{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                    <IconButton edge="end" aria-label="delete"><AddCircleIcon /></IconButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
}