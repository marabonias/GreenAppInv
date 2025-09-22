import * as React from 'react';
import {useEffect, useState} from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from './image.png'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './context/UserAuthContext';
import { Alert } from 'react-bootstrap';


function Copyright(props) {
    
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const[error,setError] = useState("")
  const { signUp } = useUserAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
        await signUp(email,password)
        navigate("/")
    }catch(err){
      setError(err.message)

    }
  };


  return (
    <div id='rect'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{textAlign:'center'}}>Technology Evaluation Tool</h2>
         <img src={image} style={{width:'230px'}}/>
         <br/>
         <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && <Alert variant="danger" style={{color:'red'}}>{error.replace('Firebase:','')}</Alert>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             
            </Grid>
            <Button
              id='button'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'#0e8d93'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider></div>
  );
}