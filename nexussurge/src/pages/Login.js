import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@mui/material';
import Header from '../components/Header.js';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
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
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '4px',
            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ marginBottom: '16px', backgroundColor: 'white' }}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ marginBottom: '16px', backgroundColor: 'white' }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
          <Typography variant="body1" style={{ marginTop: '16px' }}>
            Don't have an account? <Link href="/register">Register</Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
    </>
  );
}