import Header from '../components/Header.js'
import { Box, Typography, TextField, Button } from '@mui/material'
import '../App.css'


export function Sets() {
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
                    Create New Study Sets
                  </Typography>
                  <form>
              <TextField
                id="study-set-name"
                label="Study Set Name"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                id="study-set-description"
                label="Study Set Description"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                id="card-front-list"
                label="Card Front List"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                id="card-back-list"
                label="Card Back List"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
                </div>
            </Box>
            </div>
        </>
      );
}