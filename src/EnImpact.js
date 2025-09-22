import * as React from 'react';
import {useEffect,useState} from 'react'
import axios from 'axios'
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
import { json, useNavigate } from 'react-router-dom';
import MapChart from './MapChart';
import enimpact from './assets/img/enimpact.svg'
import Navbar from './Navbar';
import { setRef } from '@mui/material';
import { db } from './firebase';
import { collection, doc, getDocs,addDoc } from "firebase/firestore";
import CircularProgress from '@mui/joy/CircularProgress';
import Arrow from './arrow';



export default function EnImpact() {
  const[ res, SetRes] = useState(0)
  const[ tre, SetTren] = useState(-2)
  const[ airpol, SetAirpol] = useState(0)
  const[ traffic, SetTraffic] = useState(1)
  const[ zero, SetZero] = useState(0)
  const [renenergy, setRenenergy] = useState(0);
  const [fossilfuel, setFossilfuel] = useState(0);
  const [fos,SetFos]= useState(0);
  const [benefit,SetBenefit]= useState(-2);
  const [hydroelectric, setHydroelectric] = useState(0);
  const[dount,setDount] = useState(localStorage.getItem("country"))
  const[ countryData, setCountryData] = useState([])
  const navigate = useNavigate();
  const [hover, setHover] = React.useState(false);
  const [disabledRes, setDisabledRes] = useState(false);
  const [disabledRenenergy, setDisabledRenenergy] = useState(false);
  const [disabledFossilfuel, setDisabledFossilfuel] = useState(false);
  const [disabledHydroelectric, setDisabledHydroelectric] = useState(false);
  const [disabledAirpol, setDisabledAirpol] = useState(false);
  const [disabledZero, setDisabledZero] = useState(false);
  const [disabledFos, setDisabledFos] = useState(false);

  useEffect(() => {
    const savedDisabledRes = localStorage.getItem('disabledRes') === 'true';
    const savedDisabledRenenergy = localStorage.getItem('disabledRenenergy') === 'true';
    const savedDisabledFossilfuel = localStorage.getItem('disabledFossilfuel') === 'true';
    const savedDisabledHydroelectric = localStorage.getItem('disabledHydroelectric') === 'true';
    const savedDisabledAirpol = localStorage.getItem('disabledAirpol') === 'true';
    const savedDisabledZero = localStorage.getItem('disabledZero') === 'true';
    const savedDisabledFos = localStorage.getItem('disabledFos') === 'true';

    setDisabledRes(savedDisabledRes);
    setDisabledRenenergy(savedDisabledRenenergy);
    setDisabledFossilfuel(savedDisabledFossilfuel);
    setDisabledHydroelectric(savedDisabledHydroelectric);
    setDisabledAirpol(savedDisabledAirpol);
    setDisabledZero(savedDisabledZero);
    setDisabledFos(savedDisabledFos);
  }, []);

  // Function to toggle the disabled state, save to localStorage and change button color
  const handleButtonClick = (setDisabled, currentDisabled, storageKey) => {
    const newDisabledState = !currentDisabled;
    setDisabled(newDisabledState); // Toggle between true/false
    localStorage.setItem(storageKey, newDisabledState); // Save the state in localStorage
  };

  const dataCollectionRef = collection(db,"test")

useEffect(()=> {
const getMovie = async () =>{
try{
  const data = await getDocs(dataCollectionRef)
  const fdata = data.docs.map((doc) =>({...doc.data(),id:doc.id}))
  console.log(fdata)
}catch(err){
  console.log(err)
}
}
getMovie()

},[])

  function Nextpage() {
   if(disabledRes=='false'){
    if (res>20){
      localStorage.setItem('Env1',2)}
    else if (res > 5 && res <= 20){
      localStorage.setItem('Env1',1)
    }else {
      localStorage.setItem('Env1',-2)
    }
  }else{
    localStorage.setItem('Env1',0.5)}
  
    localStorage.setItem('Env1number',res)
    if(disabledRenenergy=='false'){
    if (renenergy>20){
      localStorage.setItem('Env2',2)}
    else if (renenergy > 5 && renenergy <= 20){
      localStorage.setItem('Env2',1)
    }else if (renenergy<=5){
      localStorage.setItem('Env2',-2)
    }}else{
      localStorage.setItem('Env2',0.5)
    }
    localStorage.setItem('Env2number',renenergy)
    if(disabledFossilfuel=='false'){
    if (fossilfuel>20){
      localStorage.setItem('Env3',2)}
    else if (fossilfuel > 5 && fossilfuel <= 20){
      localStorage.setItem('Env3',1)
    }else if (fossilfuel<=5){
      localStorage.setItem('Env3',-2)
    }}else{
      localStorage.setItem('Env3',0.5)
    }
    localStorage.setItem('Env3number',fossilfuel)
    if(disabledHydroelectric=='false'){
    if (hydroelectric>20){
      localStorage.setItem('Env4',2)}
    else if (hydroelectric > 5 && hydroelectric <= 20){
      localStorage.setItem('Env4',1)
    }else if (hydroelectric<=5){
      localStorage.setItem('Env4',-2)
    }}else{
      localStorage.setItem('Env4',0.5)
    }
    localStorage.setItem('Env4number',hydroelectric)
    if(disabledAirpol=='false'){
    if (airpol>20){
      localStorage.setItem('Env5',2)}
    else if (airpol > 5 && airpol <= 20){
      localStorage.setItem('Env5',1)
    }else if (airpol<=5){
      localStorage.setItem('Env5',-2)
    }}else{
      localStorage.setItem('Env5',0.5)
    }
    localStorage.setItem('Env5number',airpol)
    if(disabledZero=='false'){
    if (zero>20){
      localStorage.setItem('Env6',2)}
    else if (zero > 5 && zero <= 20){
      localStorage.setItem('Env6',1)
    }else if (zero<=5){
      localStorage.setItem('Env6',-2)
    }}else{
      localStorage.setItem('Env6',0.5)
    }
    localStorage.setItem('Env6number',zero)
   localStorage.setItem('Env7',tre)
   if(disabledFos=='false'){
   if (fos>20){
    localStorage.setItem('Env8',2)}
  else if (fos > 5 && fos <= 20){
    localStorage.setItem('Env8',1)
  }else if (fos<=5){
    localStorage.setItem('Env8',-2)
  }}else{
    localStorage.setItem('Env8',0.5)
  }
  localStorage.setItem('Env8number',fos)

   localStorage.setItem('Env9',benefit)
 
   localStorage.setItem('Res',res)
   navigate('/SoImpact');
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    const fetchRES = async () => {
      try{
        const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sdg_07_40?format=JSON&lang=EN&geoLevel=country&time=2022')
        
        console.log(res.data.dimension.geo.category)
        const countrie = JSON.stringify(res.data.dimension.geo.category.index)
        const countrie2 = res.data.dimension.geo.category.index
        const data = res.data.value
        if(countrie.includes(JSON.stringify(dount))){
        console.log(data[countrie2[dount]])
        SetRes(data[countrie2[dount]])
        }
        if (dount==='GR'){
          SetRes(data[countrie2['EL']])
        }
      
       // setCountries(res.data.dimension.geo.category.index)
       // setCountryData(res.data.value)
      }catch(err){
        console.log(err)
      }
    }

  useEffect(()=>{

    //fetchRES()
    if (localStorage.getItem('Env1')){
      SetRes(localStorage.getItem('Env1number')*1)
    }
    if (localStorage.getItem('Env2')){
      setRenenergy(localStorage.getItem('Env2number')*1)
    }
    if (localStorage.getItem('Env3')){
      setFossilfuel(localStorage.getItem('Env3number')*1)
    }
    if (localStorage.getItem('Env4')){
      setHydroelectric(localStorage.getItem('Env4number')*1)
    }
    if (localStorage.getItem('Env5')){
      SetAirpol(localStorage.getItem('Env5number')*1)
    }
    if (localStorage.getItem('Env6')){
      SetZero(localStorage.getItem('Env6number')*1)
    }
    if (localStorage.getItem('Env7')){
      SetTren(localStorage.getItem('Env7')*1)
    }
    if (localStorage.getItem('Env8')){
      SetFos(localStorage.getItem('Env8number')*1)
    }
    if (localStorage.getItem('Env9')){
      SetBenefit(localStorage.getItem('Env9')*1)
    }

  },[])


  return (<>
    <Navbar/>
    <br/>
    <div className='container'>
    <div style={{right:'0%',position:'absolute',marginRight:'20px'}}>
   <h4 style={{float:'inline-start',color:'whitesmoke', paddingRight:'10px'}}>Progress</h4>
  <CircularProgress size="lg" determinate value={7.1}>
        <p style={{color:'whitesmoke'}}>7.1%</p>
      </CircularProgress>
      </div>
  
      <div className='center2' id='mobile'>
            <img src={enimpact} id='title-img' alt="card image" class="card__img" />
            <h2 style={{ color:'whitesmoke',width:'200px'}}>Environmental Impact</h2>
</div>
<br/>
<div  id='container2' style={{borderRadius:'10px',backgroundColor:'#ececec'}}>
  <div>
    <h4 className='question'>Questions</h4>
    <p style={{color:'#0e8d93',fontStyle:'italic'}}>If you don't know the answer, please press the corresponding button</p>


    <p>
        What is the estimated percentage decrease in carbon emissions for the implementation of the given technology or investment/project?   
          {!disabledRes && (
            <>
            <input 
              value={res} 
              id="input" 
            
              name="Res" 
              onChange={e => SetRes(e.target.value)} 
              disabled={disabledRes} 
          
        />   <span style={{ color: '#4893a1', fontWeight: '600' }}> %</span></>  )}
      
      
        <br/>
        <button 
        
          onClick={() => handleButtonClick(setDisabledRes, disabledRes, 'disabledRes')}
          style={{
            backgroundColor: disabledRes ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledRes ? '#fff' : '#a5adb7c7', // White text when active
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>


      <p>
        By what percentage is electricity usage expected to decrease due to the implementation of this technology or project? 
        {!disabledRenenergy && (
          <>
          <input 
            value={renenergy} 
            id="input" 
            name="Res" 
            onChange={e => setRenenergy(e.target.value)} 
            disabled={disabledRenenergy} 
          /><span style={{ color: '#4893a1', fontWeight: '600' }}> %</span></>
        )}
        <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledRenenergy, disabledRenenergy,  'disabledRenenergy')}
          style={{
            backgroundColor: disabledRenenergy ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledRenenergy ? '#fff' : '#a5adb7c7', // White text when active
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>


      <p>
        By what percentage is heat usage expected to decrease as a result of implementing this technology or project? 
        {!disabledFossilfuel && (
          <>
          <input 
            value={fossilfuel} 
            id="input" 
            name="Res" 
            onChange={e => setFossilfuel(e.target.value)} 
            disabled={disabledFossilfuel} 
          />  <span style={{ color: '#4893a1', fontWeight: '600' }}>%</span></>
        )}
      <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledFossilfuel, disabledFossilfuel, 'disabledFossilfuel')}
          style={{
            backgroundColor: disabledFossilfuel ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledFossilfuel ?  '#fff' : '#a5adb7c7', // White text when active
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>
  
 
      <p>
        By what percentage is waste generation expected to be reduced due to this technology or project? 
        {!disabledHydroelectric && (
          <>
          <input 
            value={hydroelectric} 
            id="input" 
            name="Res" 
            onChange={e => setHydroelectric(e.target.value)} 
            disabled={disabledHydroelectric} 
          /> <span style={{ color: '#4893a1', fontWeight: '600' }}>%</span></>
        )}
       <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledHydroelectric, disabledHydroelectric, 'disabledHydroelectric')}
          style={{
            backgroundColor: disabledHydroelectric ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledHydroelectric ?  '#fff' : '#a5adb7c7', // White text when active
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>

      <p>
        By what percentage is water usage expected to decrease as a result of this technology or project? 
        {!disabledAirpol && (
          <>
          <input 
            value={airpol} 
            id="input" 
            name="Res" 
            onChange={e => SetAirpol(e.target.value)} 
            disabled={disabledAirpol} 
          /> <span style={{ color: '#4893a1', fontWeight: '600' }}>%</span></>
        )}
       <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledAirpol, disabledAirpol, 'disabledAirpol')}
          style={{
            backgroundColor: disabledAirpol ? '#0e8d93' : '#495a6f',
            color: disabledAirpol ? '#fff' : '#a5adb7c7',
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>

      <p>
      By what percentage is fuel consumption expected to decrease due to this technology or project? 
        {!disabledZero && (
          <>
          <input 
            value={zero} 
            id="input" 
            name="Res" 
            onChange={e => SetZero(e.target.value)} 
            disabled={disabledZero} 
          />  <span style={{ color: '#4893a1', fontWeight: '600' }}>%</span></>
        )}
      <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledZero, disabledZero, 'disabledZero')}
          style={{
            backgroundColor: disabledZero ?  '#0e8d93' : '#495a6f',
            color: disabledZero ? '#fff' : '#a5adb7c7',
            border: 'none',
            padding: '5px 10px',
            borderRadius:'4px',
            marginTop:'4px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>
  



  <p>Does the technology or investment in your
country/region incorporate renewable
energy sources such as hydroelectric
energy, biofuels, geothermal energy, or
wind power?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => { SetTren(2) }} type="radio" id="switch_left6" name="switch_8" value="yes"  checked={tre === 2}/>
            <label for="switch_left6">Yes</label>
            <input onClick={() => { SetTren(-2) }} type="radio" id="switch_right6" name="switch_8" value="no"  checked={tre === -2}/>
            <label for="switch_right6">No</label>
          </div>
        </div>
      </div>
  </div>  
  <p>
  By what percentage is fossil energy consumption expected to decrease due to this technology or project? 
        {!disabledFos && (
          <>
          <input 
            value={fos} 
            id="input" 
            name="Res" 
            onChange={e => SetFos(e.target.value)} 
            disabled={disabledFos} 
          />  <span style={{ color: '#4893a1', fontWeight: '600' }}>%</span></>
        )}
      <br/>
        <button 
          onClick={() => handleButtonClick(setDisabledFos, disabledFos, 'disabledFos')}
          style={{
            backgroundColor: disabledFos ? '#0e8d93' : '#495a6f',
            color: disabledFos ? '#fff' : '#a5adb7c7',
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          I don't know
        </button>
      </p>


  <p>Does the technology promote long-term
environmental benefits, such as ensuring a
sustained reduction in emissions, improving
air quality, or mitigating climate change
impacts?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => { SetBenefit(2) }} type="radio" id="switch_left7" name="switch_9" value="yes"  checked={benefit === 2}/>
            <label for="switch_left7">Yes</label>
            <input onClick={() => { SetBenefit(-2) }} type="radio" id="switch_right7" name="switch_9" value="no"  checked={benefit === -2}/>
            <label for="switch_right7">No</label>
          </div>
        </div>
      </div>

  

  <br/>
  <div class="links">
  <button className="follow" onClick={() => navigate('/Description')}>Back</button>
  

        <button class="follow" style={{float:'right'}}onClick={(e)=>{Nextpage()}}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Next</button>
      </div>
</div>




   </div></>
  );
}