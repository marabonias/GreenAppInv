import * as React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './context/UserAuthContext';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Modal,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Alert } from 'react-bootstrap';
import image from './image.png';
import chrome from './chrome.svg';

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { logIn, googleSignIn, resetPassword } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/welcome");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/welcome');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    setOpenModal(true);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await resetPassword(email);
      setResetMessage("Password reset email sent! Check your inbox.");
      setOpenModal(false);
    } catch (err) {
      setError(err.message);
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
          <h2 style={{ textAlign: 'center' }}>Technology Evaluation Tool</h2>
          <img src={image} style={{ width: '230px' }} alt="logo" />
          <Typography component="h1" variant="h5" style={{ color: 'black' }}>
            Sign in
          </Typography>
          {error && <Alert variant="danger" style={{ color: 'red' }}>{error.replace('Firebase:', '')}</Alert>}
          {resetMessage && <Alert variant="success" style={{ color: 'green' }}>{resetMessage}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#0e8d93' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  style={{color:'#0e8d93'}}onClick={handleForgotPassword}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2" style={{color:'#0e8d93'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <br />
            <div className="separator" style={{ fontWeight: 600, color: '#0e8d93' }}>OR</div>
            <Button id='congoogle'
              onClick={handleGoogleSignIn}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'whitesmoke', textTransform: 'none', boxShadow: 'none', border: '1px solid gray', color: '#0e8d93' }}
            >
              <img src={chrome} style={{ width: '24px', marginRight: '20px' }} alt="google" />
              <span >Continue with Google</span>
            </Button>
          </Box>
        </Box>
      </Container>
      
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="reset-email"
            type="email"
            label="Email Address"
            name="reset-email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleResetPassword} variant="contained" sx={{ mt: 2, bgcolor: '#0e8d93' }}>
            Send Reset Email
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
    </div>
  );
}

