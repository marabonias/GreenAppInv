import React, { useState,useEffect } from "react";
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
import ecimpact from './assets/img/ecimpact.svg'
import Tooltip from '@mui/material/Tooltip';
import info from './info.svg'
import Textarea from '@mui/joy/Textarea';
import axios from 'axios';
import Navbar from "./Navbar";



const API_KEY = process.env.REACT_APP_API_KEY


export default function Welcome() {
  const navigate = useNavigate();
  const [question1, setQuestion1] = useState("");

  const [response, setResponse] = useState('');

  function Nextpage() {


   setTimeout(() => {
    console.log(response)
    navigate('/Map');
  }, 500);
  }




  return (
    <>
    <Navbar/>
    <br/>
    <div className='container'>
      <div className='center-screen'>
    

<div  id='container3'  style={{borderRadius:'10px',backgroundColor:'#ececec',width:'50%'}}><h4 style={{marginBottom:'0px'}}>Welcome to the JETforCE Technology Evaluation Tool</h4>
  <div>
 <p id='format'>This tool is designed to help decision-makers analyse the cost/benefit of proposed technologies or investments for green energy production, distribution, and use through a ‘Just Energy Transition’ lens.</p>
 <p id='format'> 
Questions guide decision-makers through indicators of potential impact on socio-procedural justice, energy indicators, and costs. Weighted answers serve as decision-making support for investments and incorporate the approach of the <a style={{color:'#0e8d93'}} href='https://www.interreg-central.eu/projects/jetforce/' target='target-blank'>Interreg Central Europe JETforCE</a> project to use digital technologies in enabling a Just Energy Transition in Central Europe. </p>
<p id='format'>The goal is to make the most of investments in energy efficiency and renewable energy (i.e., green energy technologies), while guaranteeing social equality. JETforCE provides decision-makers and policymakers with solutions and capacities to exploit 
  digital technologies and create integrated, inclusive frameworks contributing to <a style={{color:'#0e8d93'}} href='https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal/delivering-european-green-deal_en' target='target-blank'>EU Green Deal energy targets</a>.
</p >
      </div>

      <div class="links">
        <button class="follow" style={{float:'right'}}onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>
   </div></div>
   </>
  );
}