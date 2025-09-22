import * as React from 'react';
import {useEffect,useState} from 'react'

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
import Navbar from './Navbar';
import CircularProgress from '@mui/joy/CircularProgress';







export default function EcImpact() {
  const navigate = useNavigate();
  const[ natinitiatives, SetNatinitiatives] = useState(-1) 
  const[ROI,setROI]= useState('0')
  const[ investement, SetInvestement] = useState('0')
  const[ cost, SetCost] = useState(0)
  const[ reginitiatives, SetReginitiatives] = useState(-2)
  const[ muninitiatives, SetMuninitiatives] = useState(1)
  const[ venture, SetVenture] = useState(-1)
  const[ privateq, SetPrivateq] = useState(1)
  const[ spartner, SetSpartner] = useState(-1)
  const[ repayable, SetRepayable] = useState(1)
  const[ energy, SetEnergy] = useState('0')
  const[ growth, SetGrowth] = useState('0')
  const[ ownership, SetOwenership] = useState(-1)
  const[ adoption, SetAdoption] = useState(-2)
  const[ burden, SetBurden] = useState(-2)
  const [disabledCost, setDisabledCost] = useState(false);
  const [disabledInvestement, setDisabledInvestement] = useState(false);
  const [disabledROI, setDisabledROI] = useState(false);
  const [disabledEnergy, setDisabledEnergy] = useState(false);
  const [disabledGrowth, setDisabledGrowth] = useState(false);
  useEffect(() => {
   
    const savedDisabledCost = localStorage.getItem('disabledCost') === 'true';
    const savedDisabledInvestement = localStorage.getItem('disabledInvestement') === 'true';
    const savedDisabledROI = localStorage.getItem('disabledROI') === 'true';
    const savedDisabledEnergy = localStorage.getItem('disabledEnergy') === 'true';
    const savedDisabledGrowth = localStorage.getItem('disabledGrowth') === 'true';

    setDisabledCost(savedDisabledCost);
    setDisabledInvestement(savedDisabledInvestement);
    setDisabledROI(savedDisabledROI);
    setDisabledEnergy(savedDisabledEnergy);
    setDisabledGrowth(savedDisabledGrowth);
  }, []);
  const handleButtonClick = (setDisabled, currentDisabled, storageKey) => {
    const newDisabledState = !currentDisabled;
    setDisabled(newDisabledState); // Toggle between true/false
    localStorage.setItem(storageKey, newDisabledState); // Save the state in localStorage
  };
  function Nextpage() {
    
    localStorage.setItem('Ec1', cost)

    if( disabledInvestement==false){
    if (investement>=10){
      localStorage.setItem('Ec2',-1)}
    else if (investement<=5){
      localStorage.setItem('Ec2',2)
    }
    else{
      localStorage.setItem('Ec2',1)
    }}
    else{
      localStorage.setItem('Ec2',0.5)
    }
    localStorage.setItem('Ec2value',investement)


    if( disabledROI==false){
    if (ROI>20){
      localStorage.setItem('Ec3',2)}
    else if (ROI<5){
      localStorage.setItem('Ec3',-1)
    }
    else{
      localStorage.setItem('Ec3',1)
    }} else{
      localStorage.setItem('Ec3',0.5)
    } 
    localStorage.setItem('ROIvalue',ROI)
    if( disabledEnergy==false){
    if (energy>20){
      localStorage.setItem('Ec4',2)}
    else if (energy<5){
      localStorage.setItem('Ec4',-1)
    }
    else{
      localStorage.setItem('Ec4',1)
    }}
    else{
      localStorage.setItem('Ec4',0.5)
    }
    localStorage.setItem('Energyvalue',energy)
    if( disabledGrowth==false){
     if (growth>20){
      localStorage.setItem('Ec5',2)}
    else if (growth<5){
      localStorage.setItem('Ec5',-1)
    }
    else{
      localStorage.setItem('Ec5',1)
    }}else{
      localStorage.setItem('Ec5',0.5)
    }
    localStorage.setItem('growthvalue',growth)

    localStorage.setItem('Ec6',venture)
    localStorage.setItem('Ec7',privateq)    
    localStorage.setItem('Ec8',spartner)
    localStorage.setItem('Ec9',repayable)
    localStorage.setItem('Ec10',ownership)
    localStorage.setItem('Ec11',adoption)
    localStorage.setItem('Ec12',burden)
    navigate('/Question1');
  }

     useEffect(()=>{
  
        if (localStorage.getItem('Ec1')){
          SetCost(localStorage.getItem('Ec1')*1)
        }
        if (localStorage.getItem('Ec2')){
          SetInvestement(localStorage.getItem('Ec2value')*1)
        }
        if (localStorage.getItem('Ec3')){
          setROI(localStorage.getItem('ROIvalue')*1)
        }
        if (localStorage.getItem('Ec4')){
          SetEnergy(localStorage.getItem('Energyvalue')*1)
        }
        if (localStorage.getItem('Ec5')){
          SetGrowth(localStorage.getItem('growthvalue')*1)
        }
        if (localStorage.getItem('Ec6')){
          SetVenture(localStorage.getItem('Ec6')*1)
        }
        if (localStorage.getItem('Ec7')){
          SetPrivateq(localStorage.getItem('Ec7')*1)
        }
        if (localStorage.getItem('Ec8')){
          SetSpartner(localStorage.getItem('Ec8')*1)
        }
        if (localStorage.getItem('Ec9')){
          SetRepayable(localStorage.getItem('Ec9')*1)
        }
        if (localStorage.getItem('Ec10')){
          SetOwenership(localStorage.getItem('Ec10')*1)
        }
        if (localStorage.getItem('Ec11')){
          SetAdoption(localStorage.getItem('Ec11')*1)
        }
        if (localStorage.getItem('Ec12')){
          SetBurden(localStorage.getItem('Ec12')*1)
        }
    
      },[])

  return (
    <>
    <Navbar/>
    <br/>
    <div className='container'>
    <div style={{right:'0%',position:'absolute',marginRight:'20px'}}>

   <h4 style={{float:'inline-start',color:'whitesmoke', paddingRight:'10px'}}>Progress</h4>
  <CircularProgress size="lg" determinate value={21.4}>
        <p style={{color:'whitesmoke'}}>21.4%</p>
      </CircularProgress>
      </div>
      <div className='center2'  id='mobile'>
            <img src={ecimpact} id='title-img' alt="card image" class="card__img" />
            <h2 style={{ color:'whitesmoke',width:'150px'}}>Economic Impact</h2>
</div>
<br/>
<div  id='container2' style={{borderRadius:'10px',backgroundColor:'#ececec'}}>
  <div>
    <h4 className='question'>Questions</h4>
 </div>  

 <p style={{ marginBottom: '0px', marginTop: '8px' }}>
        What are the total implementation costs of the project? 
        {!disabledCost && (
          <>
          <input
            value={cost}
            id="input"
            name="ROI"
            onChange={e => SetCost(e.target.value)}
            disabled={disabledCost}
          /><span style={{ color: '#4893a1', fontWeight: '600' }}> €</span></>
        )}
        <br />
        <button
          onClick={() => handleButtonClick(setDisabledCost, disabledCost, 'disabledCost')}
          style={{
            backgroundColor: disabledCost ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledCost ? '#fff' : '#a5adb7c7',
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          I don't know
        </button>
      </p>
    

      <p style={{ marginBottom: '0px', marginTop: '8px' }}>
        What is the expected payback period of the project or investment?
        {!disabledInvestement && (
          <>
          <input
            value={investement}
            id="input"
            name="ROI"
            onChange={e => SetInvestement(e.target.value)}
            disabled={disabledInvestement}
          /><span style={{ color: '#4893a1', fontWeight: '600' }}> years</span></>
        )}
         <br />
        <button
          onClick={() => handleButtonClick(setDisabledInvestement, disabledInvestement, 'disabledInvestement')}
          style={{
            backgroundColor: disabledInvestement ? '#0e8d93' : '#495a6f',
            color: disabledInvestement? '#fff' : '#a5adb7c7',
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          I don't know
        </button>
      </p>
      

      <p style={{ marginBottom: '0px', marginTop: '8px' }}>
        What is the return on investments (ROI)?
        {!disabledROI && (
          <>
          <input
            value={ROI}
            id="input"
            name="ROI"
            onChange={e => setROI(e.target.value)}
            disabled={disabledROI}
          /> <span style={{ color: '#4893a1', fontWeight: '600' }}> %</span></>
        )}
       
        <Tooltip title="Note: ROI = (Savings per year - maintenance costs) x lifetime / investment cost" placement="bottom">
          <img id="tooltip" src={info} alt="Info" />
        </Tooltip> <br/>
        <button
          onClick={() => handleButtonClick(setDisabledROI, disabledROI, 'disabledROI')}
          style={{
            backgroundColor: disabledROI ? '#0e8d93' : '#495a6f',
            color: disabledROI ? '#fff' : '#a5adb7c7',
            border: 'none',
            borderRadius:'4px',
            marginTop:'4px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          I don't know
        </button>
      </p>
    

      <p style={{ marginBottom: '0px', marginTop: '8px' }}>
      What are the estimated expected savings rate of the given technology or project/investment?
        {!disabledEnergy && (
          <>
          <input
            value={energy}
            id="input"
            name="ROI"
            onChange={e => SetEnergy(e.target.value)}
            disabled={disabledEnergy}
          /><span style={{ color: '#4893a1', fontWeight: '600' }}> %</span></>
        )}
        
        <br/>
        <button
          onClick={() => handleButtonClick(setDisabledEnergy, disabledEnergy, 'disabledEnergy')}
          style={{
            backgroundColor: disabledEnergy ? '#0e8d93' : '#495a6f', // Green when active
            color: disabledEnergy ? '#fff' : '#a5adb7c7', // White text when active
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
      

      <p style={{ marginBottom: '0px', marginTop: '8px' }}>
        By what percentage are energy costs expected to decrease as a result of implementing this technology or project?
        {!disabledGrowth && (
          <>
          <input
            value={growth}
            id="input"
            name="ROI"
            onChange={e => SetGrowth(e.target.value)}
            disabled={disabledGrowth}
          /> <span style={{ color: '#4893a1', fontWeight: '600' }}> %</span>
          </>
        )}
         <br />
        <button
          onClick={() => handleButtonClick(setDisabledGrowth, disabledGrowth, 'disabledGrowth')}
          style={{
            backgroundColor: disabledGrowth ? '#0e8d93' : '#495a6f',
            color: disabledGrowth ? '#fff' : '#a5adb7c7', // White text when active
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
     
  








   <div>
    <p>Is there potential for local value chains to benefit from the technology or investment (e.g., will local suppliers be used for materials, services, or support)?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetVenture(1) }} type="radio" id="switch_left3" name="switch_4" value="yes"  checked={venture === 1}/>
            <label for="switch_left3">Yes</label>
            
            <input  onClick={() => {SetVenture(-1) }} type="radio" id="switch_right3" name="switch_4" value="no" checked={venture === -1}/>
            <label for="switch_right3">No</label>
          </div>
        </div>
      </div>
  </div>  


    <div>
    <p>Is this technology/investment expected to create new jobs?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetPrivateq(2) }} type="radio" id="switch_left4" name="switch_5" value="yes"  checked={privateq === 2}/>
            <label for="switch_left4">Yes</label>
            
            <input  onClick={() => {SetPrivateq(1) }} type="radio" id="switch_right4" name="switch_5" value="no" checked={privateq === 1}/>
            <label for="switch_right4">No</label>
          </div>
        </div>
      </div>
  </div>  
<div>
    <p style={{marginBottom:'0px'}}>Is this project or investment related to training & education?  </p>
          
            <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetSpartner(2) }} type="radio" id="switch_left5" name="switch_6" value="yes"  checked={spartner === 2}/>
            <label for="switch_left5">Yes</label>
            
            <input  onClick={() => {SetSpartner(-1) }} type="radio" id="switch_right5" name="switch_6" value="no" checked={spartner === -1}/>
            <label for="switch_right5">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p >Does the project encourage skills development or capacity building that will enhance the workforce and economy in the region specifically?  </p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetRepayable(2) }} type="radio" id="switch_left6" name="switch_7" value="yes"  checked={repayable === 2}/>
            <label for="switch_left6">Yes</label>
            
            <input  onClick={() => {SetRepayable(1) }} type="radio" id="switch_right6" name="switch_7" value="no" checked={repayable ===1}/>
            <label for="switch_right6">No</label>
          </div>
        </div>
      </div>
  </div> 

  <div>
    <p >Can the technology or project be scaled up for broader adoption in the region or even exported to other regions or countries? </p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetOwenership(1) }} type="radio" id="switch_left7" name="switch_8" value="yes"  checked={ownership === 1}/>
            <label for="switch_left7">Yes</label>
            
            <input  onClick={() => {SetOwenership(-1) }} type="radio" id="switch_right7" name="switch_8" value="no" checked={ownership === -1}/>
            <label for="switch_right7">No</label>
          </div>
        </div>
      </div>
  </div> 


  <div>
    <p >Is there a clear demand for the technology or product in the region? (Consider factors such as market size, growth potential, and regional energy needs.) </p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetAdoption(1) }} type="radio" id="switch_left8" name="switch_9" value="yes"  checked={adoption === 1}/>
            <label for="switch_left8">Yes</label>
            
            <input  onClick={() => {SetAdoption(-2) }} type="radio" id="switch_right8" name="switch_9" value="no" checked={adoption === -2}/>
            <label for="switch_right8">No</label>
          </div>
        </div>
      </div>
  </div> 

  <div>
    <p >Does the technology reduce the energy cost burden for end-users, particularly low-income households? </p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetBurden(1) }} type="radio" id="switch_left9" name="switch_10" value="yes"  checked={burden === 1}/>
            <label for="switch_left9">Yes</label>
            
            <input  onClick={() => {SetBurden(-2) }} type="radio" id="switch_right9" name="switch_10" value="no" checked={burden === -2}/>
            <label for="switch_right9">No</label>
          </div>
        </div>
      </div>
  </div> 


<br/>
  <div class="links">
  <button className="follow" onClick={() => navigate('/SoImpact')}>Back</button>

        <button class="follow" style={{float:'right'}} onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>




   </div>
   </>
  );
}