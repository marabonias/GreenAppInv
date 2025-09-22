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
import simpact from './assets/img/simpact.svg'
import Tooltip from '@mui/material/Tooltip';
import info from './info.svg'
import Navbar from './Navbar';
import CircularProgress from '@mui/joy/CircularProgress';





export default function SoImpact() {
  const[ enregional, SetEnregional] = useState(-1)
  const[ development, SetDevelopment] = useState(1)
  const[ ennational, SetEnnational] = useState(-1)
  const[ enlocal, SetEnlocal] = useState(-1)
  const[ sme, SetSme] = useState(-1)
  const[ uneployed, SetUneployed] = useState(-1)
  const[ migrants, SetMigrants] = useState(-1)
  const[ auxilary, SetAuxilary] = useState(-1)
  const[investement,SetInvestement] = useState(1)
  const[incorporate,SetIncorporate] = useState(-1)
  const[biodiversity,SetBiodiversity] = useState(-2)
  const[income,SetIncome] = useState(-2)

  const navigate = useNavigate();
  function Nextpage() { 
    localStorage.setItem('So1',ennational)
    localStorage.setItem('So2', enregional)
    localStorage.setItem('So3',enlocal)
    localStorage.setItem('So4',sme)
    localStorage.setItem('So5',uneployed)
    localStorage.setItem('So6',migrants)
    localStorage.setItem('So7',auxilary)
    localStorage.setItem('So8',development)
    localStorage.setItem('So9',investement)
    localStorage.setItem('So10',income)
    localStorage.setItem('So11',biodiversity)
    localStorage.setItem('So12',incorporate)
    navigate('/EcImpact');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    useEffect(()=>{

      if (localStorage.getItem('So1')){
        SetEnnational(localStorage.getItem('So1')*1)
      }
      if (localStorage.getItem('So2')){
        SetEnregional(localStorage.getItem('So2')*1)
      }
      if (localStorage.getItem('So3')){
        SetEnlocal(localStorage.getItem('So3')*1)
      }
      if (localStorage.getItem('So4')){
        SetSme(localStorage.getItem('So4')*1)
      }
      if (localStorage.getItem('So5')){
        SetUneployed(localStorage.getItem('So5')*1)
      }
      if (localStorage.getItem('So6')){
        SetMigrants(localStorage.getItem('So6')*1)
      }
      if (localStorage.getItem('So7')){
        SetAuxilary(localStorage.getItem('So7')*1)
      }
      if (localStorage.getItem('So8')){
        SetDevelopment(localStorage.getItem('So8')*1)
      }
      if (localStorage.getItem('So9')){
        SetInvestement(localStorage.getItem('So9')*1)
      }
      if (localStorage.getItem('So10')){
        SetIncome(localStorage.getItem('So10')*1)
      }
      if (localStorage.getItem('So11')){
        SetBiodiversity(localStorage.getItem('So11')*1)
      }
      if (localStorage.getItem('So12')){
        SetIncorporate(localStorage.getItem('So12')*1)
      }
  
    },[])

  return (
    <>
    <Navbar/>
    <br/>
    <div className='container'>
    <div style={{right:'0%',position:'absolute',marginRight:'20px'}}>

   <h4 style={{float:'inline-start',color:'whitesmoke', paddingRight:'10px'}}>Progress</h4>
  <CircularProgress size="lg" determinate value={14.3}>
        <p style={{color:'whitesmoke'}}>14.3%</p>
      </CircularProgress>
      </div>
      <div className='center2'>
            <img src={simpact} id='title-img' alt="card image" class="card__img" />
            <h2 style={{ color:'whitesmoke',width:'200px'}}>Social Impact</h2>
</div>
<br/>
<div  id='container2' style={{borderRadius:'10px',backgroundColor:'#ececec'}}>
  <div>
    <h4 className='question'>Questions</h4>
  

    <p>Are there current policies on the energy transition in place or underway at the national level?</p>
   
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetEnnational(1) }} type="radio" id="switch_left" name="switch_1" value="yes"  checked={ennational === 1}/>
            <label for="switch_left">Yes</label>
            
            <input  onClick={() => {SetEnnational(-1) }} type="radio" id="switch_right" name="switch_1" value="no" checked={ennational === -1}/>
            <label for="switch_right">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Are there current policies on the energy transition in place or underway at the regional level?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetEnregional(2) }} type="radio" id="switch_left1" name="switch_2" value="yes"  checked={enregional === 2}/>
            <label for="switch_left1">Yes</label>
            
            <input  onClick={() => {SetEnregional(-1) }} type="radio" id="switch_right1" name="switch_2" value="no" checked={enregional === -1}/>
            <label for="switch_right1">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the given technology or investment address these policies?</p>
   
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetEnlocal(2) }} type="radio" id="switch_left2" name="switch_3" value="yes"  checked={enlocal === 2}/>
            <label for="switch_left2">Yes</label>
            
            <input  onClick={() => {SetEnlocal(-1) }} type="radio" id="switch_right2" name="switch_3" value="no" checked={enlocal === -1}/>
            <label for="switch_right2">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Are there specific measures to ensure that the benefits of the technology are equally distributed across different social groups (e.g., gender, age, ethnicity)?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetSme(2) }} type="radio" id="switch_left3" name="switch_4" value="yes"  checked={sme === 2}/>
            <label for="switch_left3">Yes</label>
            
            <input  onClick={() => {SetSme(-1) }} type="radio" id="switch_right3" name="switch_4" value="no" checked={sme === -1}/>
            <label for="switch_right3">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Will the technology help reduce energy poverty or improve energy access in areas that have historically been underserved?</p>
   
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetUneployed(2) }} type="radio" id="switch_left4" name="switch_5" value="yes"  checked={uneployed === 2}/>
            <label for="switch_left4">Yes</label>
            
            <input  onClick={() => {SetUneployed(-1) }} type="radio" id="switch_right4" name="switch_5" value="no" checked={uneployed === -1}/>
            <label for="switch_right4">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Are stakeholders (especially marginalised groups) informed and involved in the process from the outset?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetMigrants(2) }} type="radio" id="switch_left5" name="switch_6" value="yes"  checked={migrants === 2}/>
            <label for="switch_left5">Yes</label>
            
            <input  onClick={() => {SetMigrants(-1) }} type="radio" id="switch_right5" name="switch_6" value="no" checked={migrants === -1}/>
            <label for="switch_right5">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the project promote equal access to people marginalised groups?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetAuxilary(2) }} type="radio" id="switch_left6" name="switch_7" value="yes"  checked={auxilary === 2}/>
            <label for="switch_left6">Yes</label>
            
            <input  onClick={() => {SetAuxilary(-1) }} type="radio" id="switch_right6" name="switch_7" value="no" checked={auxilary === -1}/>
            <label for="switch_right6">No</label>
          </div>
        </div>
      </div>
  </div>  
  

  <div>
    <p>Does the investment support the development of affordable, inclusive, and efficient transport solutions in rural or remote areas?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetDevelopment(2) }} type="radio" id="switch_left7" name="switch_8" value="yes"  checked={development === 2}/>
            <label for="switch_left7">Yes</label>
            
            <input  onClick={() => {SetDevelopment(-1) }} type="radio" id="switch_right7" name="switch_8" value="no" checked={development === -1}/>
            <label for="switch_right7">No</label>
            <input  onClick={() => {SetDevelopment(1) }} type="radio" id="switch_idk" name="switch_8" value="no" checked={development === 1}/>
            <label for="switch_idk" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Is this technology/investment expected to create new jobs?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetInvestement(2) }} type="radio" id="switch_left8" name="switch_9" value="yes"  checked={investement === 2}/>
            <label for="switch_left8">Yes</label>
            
            <input  onClick={() => {SetInvestement(1) }} type="radio" id="switch_right8" name="switch_9" value="no" checked={investement === 1}/>
            <label for="switch_right8">No</label>
            <input  onClick={() => {SetInvestement(1) }} type="radio" id="switch_idk2" name="switch_9" value="no" checked={investement === 1}/>
            <label for="switch_idk2" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the technology/investment support marginalised groups in the community (e.g., low-income households, minority communities, migrants, women)?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetIncome(2) }} type="radio" id="switch_left9" name="switch_10" value="yes"  checked={income === 2}/>
            <label for="switch_left9">Yes</label>
            
            <input  onClick={() => {SetIncome(-2) }} type="radio" id="switch_right9" name="switch_10" value="no" checked={income === -2}/>
            <label for="switch_right9">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Will the technology/investment reduce pollution, protect biodiversity, or prevent environmental injustices that disproportionately affect certain marginalised communities (e.g., low-income households, minority communities, migrants, women)?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetBiodiversity(2) }} type="radio" id="switch_left10" name="switch_11" value="yes"  checked={biodiversity === 2}/>
            <label for="switch_left10">Yes</label>
            <input  onClick={() => {SetBiodiversity(-2) }} type="radio" id="switch_right10" name="switch_11" value="no" checked={biodiversity === -2}/>
            <label for="switch_right10">No</label>
          </div>
        </div>
      </div>
  </div>  
  
  <div>
    <p>Does this investment/project incorporate citizen participation?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetIncorporate(2) }} type="radio" id="switch_left11" name="switch_12" value="yes"  checked={incorporate === 2}/>
            <label for="switch_left11">Yes</label>
            <input  onClick={() => {SetIncorporate(-1) }} type="radio" id="switch_right11" name="switch_12" value="no" checked={incorporate === -1}/>
            <label for="switch_right11">No</label>
          </div>
        </div>
      </div>
  </div>  

<br/>
  <div class="links">
        <button class="follow" style={{float:'right'}} onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>




   </div>
   </>
  );
}
//<p style={{color:'red',fontSize:'11px'}}></p>

/*
   <FormControlLabel  control={<Checkbox   style ={{
                      color: "#0e8d93",
                    }}
                    />}   label={<Typography style={{fontSize:'14px',color:'#0e8d93'}}>I don't know</Typography>} />
*/