import React, { useState } from 'react';
import Header from '../components/Header.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
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
            <Card className="card" style={{width: '40%', height: '600px', transformOrigin: 'center'}} onClick={handleClick}>
                <CardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Typography style={{fontSize: 36, fontWeight: 'bold', marginBottom: '20px', textAlign: 'center'}} color="textPrimary" gutterBottom>
                        {showDefinition ? example_flashcards[currentIndex].definition : example_flashcards[currentIndex].term}
                    </Typography>
                </CardContent>
            </Card>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <IconButton color="primary" onClick={handlePrevClick}>
                    <ArrowBackIos />
                </IconButton>
                <IconButton color="primary" onClick={handleNextClick}>
                    <ArrowForwardIos />
                </IconButton>
            </div>
        </div>

    </>
  );
}