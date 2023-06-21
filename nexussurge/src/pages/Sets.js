import Header from '../components/Header.js'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../App.css'

export function Sets() {

    const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
    const sbcolor = getComputedStyle(document.documentElement).getPropertyValue('--box-color');
    const btcolor = getComputedStyle(document.documentElement).getPropertyValue('--button-color');

    /* Example API result from searching database */
    const test_search_results = [
        {
            title: "Test Set 1",
            description: "This is a test set",
            creator: "Test User 1",
            num_cards: 10,
            id: 1
        },
        {
            title: "Test Set 2",
            description: "This is a test set",
            creator: "Test User 2",
            num_cards: 10,
            id: 2
        },
        {
            title: "Test Set 3",
            description: "This is a test set",
            creator: "Test User 3",
            num_cards: 10,
            id: 3
        },
        {
            title: "Test Set 4",
            description: "This is a test set",
            creator: "Test User 4",
            num_cards: 10,
            id: 4
        },
        {
            title: "Test Set 5",
            description: "This is a test set",
            creator: "Test User 5",
            num_cards: 10,
            id: 5
        }]

    /* Example API result from popular sets */
    const test_popular_results = [
        {
            title: "Test Set 1",
            description: "This is a test set",
            creator: "Test User 1",
            num_cards: 10,
            id: 1
        },
        {
            title: "Test Set 2",
            description: "This is a test set",
            creator: "Test User 2",
            num_cards: 10,
            id: 2
        },
        {
            title: "Test Set 3",
            description: "This is a test set",
            creator: "Test User 3",
            num_cards: 10,
            id: 3
        },
        {
            title: "Test Set 4",
            description: "This is a test set",
            creator: "Test User 4",
            num_cards: 10,
            id: 4
        },
        {
            title: "Test Set 5",
            description: "This is a test set",
            creator: "Test User 5",
            num_cards: 10,
            id: 5
        },
        {
            title: "Test Set 6",
            description: "This is a test set",
            creator: "Test User 6",
            num_cards: 10,
            id: 6
        }
    ]

    /* Example API result from my sets */
    const test_user_sets_result = [
        {
            title: "Test Set 1",
            description: "This is a test set",
            creator: "Test User 1",
            num_cards: 10,
            id: 1
        },
        {
            title: "Test Set 2",
            description: "This is a test set",
            creator: "Test User 2",
            num_cards: 10,
            id: 2
        },
        {
            title: "Test Set 3",
            description: "This is a test set",
            creator: "Test User 3",
            num_cards: 10,
            id: 3
        },
        {
            title: "Test Set 4",
            description: "This is a test set",
            creator: "Test User 4",
            num_cards: 10,
            id: 4
        },
        {
            title: "Test Set 5",
            description: "This is a test set",
            creator: "Test User 5",
            num_cards: 10,
            id: 5
        },
        {
            title: "Test Set 6",
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
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: sbcolor, borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color= "fcolor" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Recent Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', overflowY: 'scroll', marginTop: '10px' }}>
                        {test_user_sets_result.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 'auto', minHeight: '10vh', maxWidth: '20vw', padding: '1vh', marginBottom: '1vh', borderRadius: '10px', backgroundColor: scolor, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginTop: '10px' }}>                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                                    <Typography variant="h5" marginLeft={'18px'}>{result.title}</Typography>
                                    <Typography variant="subtitle1" marginLeft={'18px'}>{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh', backgroundColor: fcolor }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: sbcolor, borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color="fcolor" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Database
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', marginTop: '5px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '75%', height: '8.1vh', marginBottom: '21px', backgroundColor: fcolor }}>
                            <TextField id="outlined-basic" label="Search for Sets and Worksheets" variant="outlined" backgroundColor="fcolor" sx={{ color: "fcolor", width: '103%', height: '103%', input: { color: bcolor } , backgroundColor: fcolor}} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', width: '70%', height: '14vh', padding: '2vh', border: '2px solid black', marginBottom: '1vh', marginTop: '20px', backgroundColor: scolor}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6">Search for flashcard sets and worksheets made by other users!</Typography>
                                </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '1px', height: '80vh', backgroundColor: fcolor }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '80vh', backgroundColor: sbcolor, borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                    <Typography component="h1" variant="h2" align="center" color="fcolor" gutterBottom fontFamily={'Rubik'} style={{ marginTop: '20px' }}>
                        Trending Sets
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '70vh', overflowY: 'scroll', marginTop: '10px' }}>
                        {test_popular_results.map((result) => (
                            <Box key={result.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 'auto', minHeight: '10vh', maxWidth: '20vw', padding: '1vh', marginBottom: '1vh', borderRadius: '10px', backgroundColor: scolor, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', marginTop: '10px' }}>                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%', fontFamily: 'Rubik' }}>
                                    <Typography variant="h5" marginLeft={'18px'}>{result.title}</Typography>
                                    <Typography variant="subtitle1" marginLeft={'18px'}>{result.num_cards} terms by {result.creator}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginRight: '35px' }}>
                                    <IconButton edge="end" aria-label="delete" color="success"><AddCircleIcon /></IconButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
}