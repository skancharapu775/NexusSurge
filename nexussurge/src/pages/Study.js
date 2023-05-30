import Header from '../components/Header.js'
import { Box, Typography, Button } from '@mui/material'
import '../App.css'


export function Study() {
    return (
    
        <>
        <Header />
            <div className="sets-background">
            <Box sx={{mt: 0}} className="body-content">
                <h3></h3>
                <div className="flashcard-form">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    fontFamily={'Rubik'}
                  >
                    Study 
                  </Typography>
                  <img src="https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" width="400" />
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                      Find Multiplayer Match
                    </Button>
                    <Button variant="contained" color="secondary">
                      Study Alone
                    </Button>
                  </Box>
                  <Box sx={{mt: 45}}></Box>
                </div>
            </Box>
            </div>
        </>
      );
}