import React, { useState, useEffect } from "react";
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
import Navbar from "./Navbar";
import CircularProgress from '@mui/joy/CircularProgress';
import Arrow from './arrow';







export default function Description() {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  function Nextpage() {
    if (company!==""){
    localStorage.setItem("company", company)
    navigate('/EnImpact');
    }
  }

  useEffect(()=>{
    if(company=="" && localStorage.getItem("company")){
     setCompany(localStorage.getItem("company"))
    }
  
},[])

 const handleCompanyChange = e => {
    setCompany(e.target.value);
 }


  return (
    <>
    <Navbar/>
    <br/>
  

    <div className='container'>     
    <div style={{right:'0%',position:'absolute',marginRight:'20px'}}>
   <h4 style={{float:'inline-start',color:'whitesmoke', paddingRight:'10px'}}>Progress</h4>
  <CircularProgress size="lg" determinate value={0}>
        <p style={{color:'whitesmoke'}}>0%</p>
      </CircularProgress>
      </div>
      <div className='center' id='mobile'>
     
<br/>
<div  id='container3' style={{borderRadius:'10px',backgroundColor:'#ececec',width:'80%'}}>
  <div>
    <h4 className='question'>Please provide a concise description (max. 3000 characters) of the investment you plan to
make, highlighting its key environmental, social, and economic features. Clearly specify
the type of renewable energy technology involved, if any (e.g., photovoltaic, hydro,
biomass, geothermal, etc.). <Tooltip
  title={
    <Typography variant="body2">In the subsequent sections (e.g., Environmental, Social, and Economic), you will be asked to
    outline specific estimated metrics relevant to your technology or investment. These indicators
    will support a thorough assessment of its estimated impact on energy efficiency, renewable
    energy integration, and socio-procedural justice, in line with the “Just Energy Transition”
    approach.<br /><br />Please provide calculated answers to each question, as this information is essential for
contextualising your investment within broader regional and national energy transition
objectives. Your answers will contribute to the final evaluation score, leveraging AI to
enhance decision-making and ensure alignment with JETforCE’s mission of fostering
sustainable and socially inclusive energy solutions.</Typography>
  }
  PopperProps={{
    sx: {
      "& .MuiTooltip-tooltip": {
        maxWidth: "500px", // Ορισμός πλάτους
        backgroundColor: "#6C6C6C",
        color: "white",
        padding: "10px",
        border: "0px solid gray"
      }
    }
  }}
>
<img id='tooltip' src={info}></img>
</Tooltip></h4>

    <Textarea id='textarea' minRows={5} style={{maxWidth:'100%'}}  value={company} onChange={handleCompanyChange}/>
    <br/>
      </div>
      <div class="links">
      <button className="follow" onClick={() => navigate('/Map')}> Back</button>

        <button class="follow" style={{float:'right'}}onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>
</div>
   </div>
   </>
  );
}