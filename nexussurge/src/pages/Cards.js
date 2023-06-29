import React, { useState } from 'react';
import Header from '../components/Header.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, SwapHoriz } from '@mui/icons-material';
import Button from '@mui/material/Button';
import '../App.js';

export function Cards() {
    
    const example_flashcards = [
        {
            "id": 1,
            "term": "Term1",
            "definition": "Definition1",
            "set_id": 1
        },
        {
            "id": 2,
            "term": "Term2",
            "definition": "Definition2",
            "set_id": 1
        },
        {
            "id": 3,
            "term": "Term3",
            "definition": "Definition3",
            "set_id": 1
        }
    ]

    const [showDefinition, setShowDefinition] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setShowDefinition(!showDefinition);
    }

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? example_flashcards.length - 1 : currentIndex - 1);
        setShowDefinition(false);
    }

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === example_flashcards.length - 1 ? 0 : currentIndex + 1);
        setShowDefinition(false);
    }

  return (
    <>
        <Header />
        <div id="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', marginLeft: '-30vw'}}>
            <div className="card" style={{width: '40%', height: '600px', backgroundColor: 'white'}} onClick={handleClick}>
                <CardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Typography style={{fontSize: 36, fontWeight: 'bold', marginBottom: '20px', textAlign: 'center'}} color="textPrimary" gutterBottom>
                        {showDefinition ? example_flashcards[currentIndex].definition : example_flashcards[currentIndex].term}
                    </Typography>
                </CardContent>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <IconButton color="primary" onClick={handlePrevClick}>
                    <ArrowBackIos />
                </IconButton>
                <IconButton color="primary" onClick={handleNextClick}>
                    <ArrowForwardIos />
                </IconButton>
                <IconButton color="primary" onClick={handleClick}>
                    <SwapHoriz />
                </IconButton>
            </div>
            <Button variant="outlined" color="primary" style={{ borderRadius: '10px', border: '2px solid', padding: '10px 20px', fontSize: '20px', position: 'absolute', top: '15vh', right: '17vw', width: '200px' }}>Flashcards</Button>
            <Button variant="outlined" color="primary" style={{ borderRadius: '10px', border: '2px solid', padding: '10px 20px', fontSize: '20px', position: 'absolute', top: '35vh', right: '18.75vw', width: '100px' }}>Learn</Button>
            <Button variant="outlined" color="primary" style={{ borderRadius: '10px', border: '2px solid', padding: '10px 20px', fontSize: '20px', position: 'absolute', top: '55vh', right: '18.75vw', width: '100px' }}>Test</Button>
            <Button variant="contained" color="success" style={{ position: 'absolute', top: '72.5vh', right: '18vw', width: '120px', height: '60px' }}>Join Game</Button>
        </div>
    </>
  );
}