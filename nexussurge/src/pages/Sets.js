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
        },
        {
            title: "Test Set 6 - Popular",
            description: "This is a test set",
            creator: "Test User 6",
            num_cards: 10,
            id: 6
        }
    ]

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
        },
        {
            title: "Test Set 6 - Personal",
            description: "This is a test set",
            creator: "Test User 6",
            num_cards: 10,
            id: 6
        }
    ]

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100vh', marginTop:'25px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: '#F5F5F5', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Saved Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', overflowY: 'scroll', marginTop: '10px' }}>
                        {test_user_sets_result.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 'auto', minHeight: '10vh', maxWidth: '20vw', padding: '1vh', marginBottom: '1vh', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginTop: '10px' }}>                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                                    <Typography variant="h5">{result.title}</Typography>
                                    <Typography variant="subtitle1">{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh', backgroundColor: 'white' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: '#F5F5F5', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Database
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', marginTop: '10px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', height: '5vh', marginBottom: '10px' }}>
                            <TextField id="outlined-basic" label="Search for Sets and Worksheets" variant="outlined" sx={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '60vh', overflowY: 'scroll' }}>
                            {/* search column content */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '60vh', overflowY: 'scroll', marginTop: '5vh' }}>
                                {test_search_results.map((result) => (
                                    <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 'auto', minHeight: '10vh', maxWidth: '20vw', padding: '1vh', marginBottom: '1vh', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginTop: '10px' }}>                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%', fontFamily: 'Rubik' }}>
                                            <Typography variant="h5">{result.title}</Typography>
                                            <Typography variant="subtitle1">{result.num_cards} terms by {result.creator}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginRight: '10px' }}>
                                            <IconButton edge="end" aria-label="delete" color='info'><AddCircleIcon /></IconButton>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: '#F5F5F5', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Trending Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', overflowY: 'scroll', marginTop: '10px' }}>
                        {test_popular_results.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 'auto', minHeight: '10vh', maxWidth: '20vw', padding: '1vh', marginBottom: '1vh', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginTop: '10px' }}>                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%', fontFamily: 'Rubik' }}>
                                    <Typography variant="h5">{result.title}</Typography>
                                    <Typography variant="subtitle1">{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginRight: '10px' }}>
                                    <IconButton edge="end" aria-label="delete" color='info'><AddCircleIcon /></IconButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
}