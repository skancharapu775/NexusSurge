import Header from '../components/Header.js'
import { Box, Container, Typography, Stack, Button, Grid, Card, CardContent, CardActions } from '@mui/material'


export function About() {
    return (
        <>
        <div>
          <Header />
          <div className="about-background">
          <Box sx={{mt: 0}} className="body-content">
            <Container fixed >
            <Typography
            sx = {{mt: 5}}
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              About NexusSurge
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The best way to study
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
            <h1></h1>
            <h1></h1>
            <Typography
            sx = {{mt: 5}}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              Goal
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Studying information by yourself is often boring and unengaging. NexusSurge aims to make studying more fun for the user by allowing them to compete with friends online to study their information.
            </Typography>
            <Typography
            sx = {{mt: 5}}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              Study Sets
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                NexusSurge allows users to create their own study sets or import study sets from other popular study sites such as Quizlet. Users can then share their study sets with their friends and compete with them.
            </Typography>
            <Typography
            sx = {{mt: 5}}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              Multiplayer Competition
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Engaging with friends while studying is by far the best way to retain the information. Compete with your friends online to prepare for tests and quizzes on custom study sets.
            </Typography>
            <p className="white-text"></p>
          </Container>
          </Box>
          </div>
        </div>
    </>
    )
}