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



export default function EnImpact() {
  const[ res, SetRes] = useState('0')
  const[ tre, SetTren] = useState(-2)
  const[ airpol, SetAirpol] = useState(1)
  const[ traffic, SetTraffic] = useState(1)
  const[ zero, SetZero] = useState(1)
  const [renenergy, setRenenergy] = useState(1);
  const [fossilfuel, setFossilfuel] = useState(1);
  const [hydroelectric, setHydroelectric] = useState(-4);
  const[dount,setDount] = useState(localStorage.getItem("country"))
  const[ countryData, setCountryData] = useState([])
  const navigate = useNavigate();


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
    localStorage.setItem('Env1',renenergy)
    localStorage.setItem('Env2',fossilfuel)
    localStorage.setItem('Env3',hydroelectric)
    if (res>20){
      localStorage.setItem('Env7',2)}
    else if (5<res<20){
      localStorage.setItem('Env7',1)
    }else if (res<5){
      localStorage.setItem('Env7',-2)
    }
   localStorage.setItem('Env8',tre)
   localStorage.setItem('Env9',zero)
   localStorage.setItem('Env10',airpol)
   localStorage.setItem('Env11',traffic)
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
      setRenenergy(localStorage.getItem('Env1')*1)
    }
    if (localStorage.getItem('Env2')){
      setFossilfuel(localStorage.getItem('Env2')*1)
    }
    if (localStorage.getItem('Env3')){
      setHydroelectric(localStorage.getItem('Env3')*1)
    }
    
    if (localStorage.getItem('Env7')){
      SetRes(localStorage.getItem('Res')*1)
    }
    if (localStorage.getItem('Env8')){
      SetTren(localStorage.getItem('Env8')*1)
    }
    if (localStorage.getItem('Env9')){
      SetZero(localStorage.getItem('Env9')*1)
    }
    if (localStorage.getItem('Env10')){
      SetAirpol(localStorage.getItem('Env10')*1)
    }
    if (localStorage.getItem('Env8')){
      SetTraffic(localStorage.getItem('Env11')*1)
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
  
      <div className='center2'>
            <img src={enimpact} id='title-img' alt="card image" class="card__img" />
            <h2 style={{ color:'whitesmoke',width:'200px'}}>Environmental Impact</h2>
</div>
<br/>
<div  id='container2' style={{borderRadius:'10px',backgroundColor:'#ececec'}}>
  <div>
    <h4 className='question'>Questions</h4>
    
    <p>Does your project or investment directly relate to or incorporate renewable energy sources?</p>
   
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
            <input onClick={() => {setRenenergy(2) }} type="radio" id="switch_left" name="switch_2" value="yes"  checked={renenergy === 2}/>
            <label for="switch_left">Yes</label>
            
            <input  onClick={() => {setRenenergy(-2) }} type="radio" id="switch_right" name="switch_2" value="no" checked={renenergy === -2}/>
            <label for="switch_right">No</label>
            <input  onClick={() => {setRenenergy(1) }} type="radio" id="switch_idk" name="switch_2" value="no" checked={renenergy === 1}/>
            <label for="switch_idk" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the investment reduce the consumption of non-renewable resources?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => {setFossilfuel(2) }} type="radio" id="switch_left1" name="switch_3" value="yes"  checked={fossilfuel === 2}/>
            <label for="switch_left1">Yes</label>
            <input onClick={() => {setFossilfuel(-2) }} type="radio" id="switch_right1" name="switch_3" value="no"  checked={fossilfuel === -2}/>
            <label for="switch_right1">No</label>
            <input  onClick={() => {setFossilfuel(1) }} type="radio" id="switch_idk1" name="switch_3" value="no" checked={fossilfuel === 1}/>
            <label for="switch_idk1" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
    <p>Does the technology or investment in your country/region incorporate renewable energy sources such as hydroelectric energy, biofuels, geothermal energy, or wind power?</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => {setHydroelectric(4) }} type="radio" id="switch_left2" name="switch_4" value="yes"  checked={hydroelectric === 4}/>
            <label for="switch_left2">Yes</label>
            <input onClick={() => {setHydroelectric(-4) }} type="radio" id="switch_right2" name="switch_4" value="no"  checked={hydroelectric === -4}/>
            <label for="switch_right2">No</label>
          </div>
        </div>
      </div>
  </div>  

  
  <div>
  <p>What is the estimated percentage decrease in carbon emissions for the implementation of the given technology or investment/project? <input value={res} id='input' name="Res" onChange={e => SetRes(e.target.value)} /> <span style={{color:'#4893a1',fontWeight:'600'}}>%</span> .</p>
  </div>  

  <div>
  <p>Does the technology promote long-term environmental benefits, such as ensuring a sustained reduction in emissions, improving air quality, or mitigating climate change impacts?</p>
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

  <div>
  <p>Does the investment help reduce local air or water pollution?
</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => { SetAirpol(2) }} type="radio" id="switch_left7" name="switch_9" value="yes"  checked={airpol === 2}/>
            <label for="switch_left7">Yes</label>
            <input onClick={() => { SetAirpol(-1) }} type="radio" id="switch_right7" name="switch_9" value="no"  checked={airpol === -1}/>
            <label for="switch_right7">No</label>
            <input  onClick={() => {SetAirpol(1) }} type="radio" id="switch_idk2" name="switch_9" value="no" checked={airpol === 1}/>
            <label for="switch_idk2" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  

  <div>
  <p>Does the investment support the transition to electric or zero-emission vehicles?
</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => { SetZero(2) }} type="radio" id="switch_left8" name="switch_10" value="yes"  checked={zero === 2}/>
            <label for="switch_left8">Yes</label>
            <input onClick={() => { SetZero(-1) }} type="radio" id="switch_right8" name="switch_10" value="no"  checked={zero === -1}/>
            <label for="switch_right8">No</label>
            <input  onClick={() => {SetZero(1) }} type="radio" id="switch_idk3" name="switch_10" value="no" checked={zero === 1}/>
            <label for="switch_idk3" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  
  <div>
  <p>Does the investment contribute to reducing traffic congestion and improving air quality?
</p>
    <div class="columns">
        <div class="column is-12">
          <div class="up-in-toggle">
          <input onClick={() => { SetTraffic(2) }} type="radio" id="switch_left9" name="switch_11" value="yes"  checked={traffic === 2}/>
            <label for="switch_left9">Yes</label>
            <input onClick={() => { SetTraffic(-1) }} type="radio" id="switch_right9" name="switch_11" value="no"  checked={traffic === -1}/>
            <label for="switch_right9">No</label>
            <input  onClick={() => {SetTraffic(1) }} type="radio" id="switch_idk4" name="switch_11" value="no" checked={traffic === 1}/>
            <label for="switch_idk4" style={{width:'100px'}}> I don't know</label>
          </div>
        </div>
      </div>
  </div>  
  <br/>
  <div class="links">
        <button class="follow" style={{float:'right'}}onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>




   </div></>
  );
}