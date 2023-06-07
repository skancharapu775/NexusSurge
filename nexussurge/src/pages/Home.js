import Header from '../components/Header.js'
import { Container, Typography, Stack, Button } from '@mui/material'
import { Card, CardContent, CardActions, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


export function Home() {
    return (
        <>
            <Header />
        <div className="body-background">
        <Box sx={{mt: 0}} className="body-content">

            <h3></h3>
            <Container fixed >
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              NexusSurge
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The most <b>competitive</b> way to study
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{ fontFamily: 'Rubik' }} href='/sets' variant="contained">Create Study Sets</Button>
              <Button sx={{ fontFamily: 'Rubik' }} href='/about' variant="outlined">About</Button>
            </Stack>
            <h1></h1>
            <h1></h1>
            <Typography
            sx = {{mt: 10}}
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily={'jetbrains mono'}
            >
              Features
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Speed up studying with interactive, engaging activities
            </Typography>
            {/* 3 inline cards */}
            <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Study
                            </Typography>
                            <Typography>
                                Find a multiplayer match and compete against friends or others online on study sets
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href="/study" size="small">Find a Match</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Create Study Sets
                            </Typography>
                            <Typography>
                                Create new study sets to share with friends and compete with up to date information
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href="/sets" size="small">View</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
          </Container>
          {/* jank spacing thing */}
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </Box>
        </div>
        </>
    )
}