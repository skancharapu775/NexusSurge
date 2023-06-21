import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@mui/material';
import Header from '../components/Header.js';
import axios from 'axios';

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const scolor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  const fcolor = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
  const bcolor = getComputedStyle(document.documentElement).getPropertyValue('--base-color');
  const sbcolor = getComputedStyle(document.documentElement).getPropertyValue('--box-color');
  const btcolor = getComputedStyle(document.documentElement).getPropertyValue('--button-color');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log(`Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}`);
      // Send registration data to Flask backend

      axios.post('http://localhost:5000/add_new_user', {
        username: username,
        password_hash: password
      })
      .then((response) => {
        console.log(response);
        if (response.data === 'success') {
          window.location.replace('/');
        }
      }, (error) => {
        console.log(error);
      });

    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <>
    <Header />
    <Grid
      container
      spacing={2}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252437',
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'rgb(195, 200, 255)',
            padding: '24px',
            borderRadius: '4px',
            border: '5px solid rgb(50, 47, 73)',
            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h4" style={{ marginBottom: '16px', color: '#252437' }}>
            Register
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ marginBottom: '16px', backgroundColor: 'rgb(195, 200, 255)' }}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ marginBottom: '16px', backgroundColor: 'rgb(195, 200, 255)' }}
            required
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            style={{ marginBottom: '16px', backgroundColor: 'rgb(195, 200, 255)' }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px', color:fcolor, backgroundColor: btcolor, 
            height: "100%" }}
          >
            Register
          </Button>
          <Typography variant="body1" style={{ marginTop: '16px', color: '#252437' }}>
            Already have an account? <Link href="/login" color= '#252437'>Login</Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
    </>
  );
}
