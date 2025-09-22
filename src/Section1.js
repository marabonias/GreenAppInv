import * as React from 'react';
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
import MapChart from './MapChart';
import IndiaMap from './Map';
import Navbar from './Navbar';
import { useUserAuth } from './context/UserAuthContext';




export default function Section1() {
  const {user} = useUserAuth()
  const navigate = useNavigate();
  function Nextpage() {

    navigate('/Section1');
  }


  return (
    <div><Navbar/>
    <div className='container'>
      <br/><br/>
   <h2 style={{textAlign:'center', color:'whitesmoke'}}>Technology Evaluation Tool</h2>

   <MapChart/>

   </div></div>
  );
}