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
  const[ sme, SetSme] = useState(-2)
  const[ uneployed, SetUneployed] = useState(-1)
  const[ migrants, SetMigrants] = useState(-1)
  const[ auxilary, SetAuxilary] = useState(-2)
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
    localStorage.setItem('So6',development)
    localStorage.setItem('So7',migrants)
    localStorage.setItem('So8',auxilary)
  
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
        SetDevelopment(localStorage.getItem('So6')*1)
      }
      if (localStorage.getItem('So7')){
        SetMigrants(localStorage.getItem('So7')*1)
      }
      if (localStorage.getItem('So8')){
        SetAuxilary(localStorage.getItem('So8')*1)
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
      <div className='center2'  id='mobile'>
            <img src={simpact} id='title-img' alt="card image" class="card__img" />
            <h2 style={{ color:'whitesmoke',width:'200px'}}>Social Impact</h2>
</div>
<br/>
<div  id='container2' style={{borderRadius:'10px',backgroundColor:'#ececec'}}>
  <div>
    <h4 className='question'>Questions</h4>
  

    <p>Are there specific measures to ensure that
the benefits of the technology are equally
distributed across different social groups
(e.g., gender, age, ethnicity)?</p>
   
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetEnnational(2) }} type="radio" id="switch_left" name="switch_1" value="yes"  checked={ennational === 2}/>
            <label for="switch_left">Yes</label>
            
            <input  onClick={() => {SetEnnational(-1) }} type="radio" id="switch_right" name="switch_1" value="no" checked={ennational === -1}/>
            <label for="switch_right">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the technology or investment
contribute to increased community
engagement and participation in the design
and implementation of the
technology/investment (e.g. number of
NGOs involved in the investment)?</p>
    
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
    <p>Does the technology or investment
contribute to an increase in public
consultations and feedback?</p> 
   
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
    <p>Does the technology or investment
contribute to increased accessibility of the
technology/investment to marginalised
groups?</p> 
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetSme(2) }} type="radio" id="switch_left3" name="switch_4" value="yes"  checked={sme === 2}/>
            <label for="switch_left3">Yes</label>
            
            <input  onClick={() => {SetSme(-2) }} type="radio" id="switch_right3" name="switch_4" value="no" checked={sme === -2}/>
            <label for="switch_right3">No</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Will there be increased education of
stakeholders about the new
technology/investment?</p>
   
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
    <p>Does the investment support the development of affordable, inclusive, and efficient transport solutions in rural or remote areas?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetDevelopment(2) }} type="radio" id="switch_left7" name="switch_8" value="yes"  checked={development === 2}/>
            <label for="switch_left7">Yes</label>
            
            <input  onClick={() => {SetDevelopment(-2) }} type="radio" id="switch_right7" name="switch_8" value="no" checked={development === -2}/>
            <label for="switch_right7">No</label>
            <input  onClick={() => {SetDevelopment(1) }} type="radio" id="switch_idk" name="switch_8" value="no" checked={development === 1}/>
            <label for="switch_idk" style={{width:'100px'}}> Not applicable</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the technology or investment contribute to an increased number of strategic partnerships and joint ventures in the design and implementation of the technology/investment?</p>
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
    <p>Will the technology/investment reduce pollution, protect biodiversity, or prevent environmental injustices that disproportionately affect certain marginalised communities (e.g., low-income households, minority communities, migrants, women)?</p>
    
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {SetAuxilary(2) }} type="radio" id="switch_left6" name="switch_7" value="yes"  checked={auxilary === 2}/>
            <label for="switch_left6">Yes</label>
            
            <input  onClick={() => {SetAuxilary(-2) }} type="radio" id="switch_right6" name="switch_7" value="no" checked={auxilary === -2}/>
            <label for="switch_right6">No</label>
          </div>
        </div>
      </div>
  </div>  
   

<br/>
  <div class="links">
  <button className="follow" onClick={() => navigate('/EnImpact')}>Back</button>

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