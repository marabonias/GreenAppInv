import React from 'react';
import {useEffect,useState} from 'react'


import axios from 'axios'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";
import france from './assets/img/france.png'
import infob from './assets/img/info.png'
import spain from './assets/img/spain.png'
import germany from './assets/img/germany.png'
import portugal from './assets/img/portugal.png'
import belgium from './assets/img/belgium.png'
import greece from './assets/img/greece.png'
import bulgaria from './assets/img/bulgaria.png'
import sweden from './assets/img/sweden.png'
import austria from './assets/img/austria.png'
import italy from './assets/img/italy.png'
import ireland from './assets/img/ireland.png'
import cyprus from './assets/img/cyprus.png'
import croatia from './assets/img/croatia.png'
import lithuania from './assets/img/lithuania.png'
import slovenia from './assets/img/slovenia.png'
import finland from './assets/img/finland.png'
import netherlands from './assets/img/netherlands.png'
import czech from './assets/img/chezh.png'
import estonia from './assets/img/estonia.png'
import poland from './assets/img/poland.png'
import romania from './assets/img/romania.png'
import latvia from './assets/img/latvia.png'
import slovakia from './assets/img/slovakia.png'
import denmark from './assets/img/denmark.png'
import hungary from './assets/img/hungary.png'


import malta from './assets/img/malta.png'
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { Info } from '@mui/icons-material';





const geoUrl = require ('./map.json')
const highlighted = [
"IS",
"GB",
"AL",
"MK",
"RS",
"ME",
"BA",
"MD",
"UA",
"BY",
"NO",
"CH"
];



const MapChart = () => {
  const[info,setInfo] = useState(false)
  const[poverty,setPoverty] = useState('')
  const[gdp,setGDP] = useState('')
  const[renewable,setRenewable] = useState('')
  const[inflation,setInflation] = useState('')
  const[unemploy,setUnemploy] = useState('')
  const [clickedCity, setClickedCity] = useState("Greece");
  const [country, setCountry] = useState('Greece');
  const [countryimg, setCountryimg] = useState(greece);
  const [img1, setImg] = useState(greece);

  const navigate = useNavigate();
  function Nextpage() {
    localStorage.setItem("country", country);
    navigate('/Description');
  }

  const handleClick = geo => () => {
    console.log(geo.id);
    fetchPoverty(geo.id)
    fetchGDP(geo.id)
    fetchRenewable(geo.id)
    fetchUnemployemnt(geo.id)
    fetchInflation(geo.id)
   
    if ((highlighted.indexOf(geo.id) > -1)===true){
      setInfo(false)
    }else{
      setInfo(true)
    }
    setClickedCity(geo.properties.NAME)
    setCountry(geo.id)
    const NAME = geo.properties.NAME
    console.log(clickedCity)
    if (NAME== 'France'){
      setCountryimg(france)
      setImg(france)
    }
    else if (NAME== 'Spain'){
      setCountryimg(spain)

    }
    else if (NAME== 'Portugal'){
      setCountryimg(portugal)
  
    }

    else if (NAME== 'Germany'){
      setCountryimg(germany)
 
    }
    else if (NAME== 'Belgium'){
      setCountryimg(belgium)
  
    }
    else if (NAME== 'Greece'){
      setCountryimg(greece)
  
   
    }

    else if (NAME== 'Italy'){
      setCountryimg(italy)
     
    }
    else if (NAME== 'Austria'){
      setCountryimg(austria)
      
    }
    else if (NAME== 'Ireland'){
      setCountryimg(ireland)
  
    }
    else if (NAME== 'Bulgaria'){
      setCountryimg(bulgaria)
      
    }
    else if (NAME== 'Sweden'){
      setCountryimg(sweden)
     
    }
    else if (NAME== 'Cyprus'){
      setCountryimg(cyprus)
      
    }
    else if (NAME== 'Croatia'){
      setCountryimg(croatia)
     
    }
    else if (NAME== 'Lithuania'){
      setCountryimg(lithuania)
     
    }
    else if (NAME== 'Slovenia'){
      setCountryimg(slovenia)
    
    }
    else if (NAME== 'Netherlands'){
      setCountryimg(netherlands)
    
    }
    else if (NAME== 'Finland'){
      setCountryimg(finland)
    
    }
    else if (NAME== 'Czech Republic'){
      setCountryimg(czech)
  
    }
    else if (NAME== 'Estonia'){
      setCountryimg(estonia)
 
    }
    else if (NAME== 'Poland'){
      setCountryimg(poland)
      
    }
    else if (NAME== 'Romania'){
      setCountryimg(romania)
      
    }
    else if (NAME== 'Latvia'){
      setCountryimg(latvia)
      
    }
    else if (NAME== 'Slovakia'){
      setCountryimg(slovakia)
      
    }
    else if (NAME== 'Hungary'){
      setCountryimg(hungary)
      
    }
    else if (NAME== 'Denmark'){
      setCountryimg(denmark)
      
    }
    else if (NAME== 'Malta'){
      setCountryimg(malta)
      
    }
  };

  const fetchPoverty = async (country) => {
    console.log(country)
    try{
      const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sdg_01_10?format=JSON&lang=EN&geoLevel=country&time=2022')
      
      console.log(res.data.dimension.geo.category)
        const countrie = JSON.stringify(res.data.dimension.geo.category.index)
      
        const countrie2 = res.data.dimension.geo.category.index
        const data = res.data.value
        if (country==='GR'){
          setPoverty(data[countrie2['EL']])
        }
        if(countrie.includes(JSON.stringify(country))){
        //console.log(data[countrie2[country]])
        setPoverty(data[countrie2[country]])
        }
      }catch(err){
        console.log(err)
      }
    }
    const fetchGDP = async (country) => {
      console.log(country)
      try{
        const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sdg_08_10?format=JSON&lang=EN&geoLevel=country&time=2023')
        
        console.log(res.data.dimension.geo.category)
          const countrie = JSON.stringify(res.data.dimension.geo.category.index)
        
          const countrie2 = res.data.dimension.geo.category.index
          const data = res.data.value
          if (country==='GR'){
            setGDP(data[countrie2['EL']])
          }
          if(countrie.includes(JSON.stringify(country))){
          console.log(data[countrie2[country]])
          setGDP(data[countrie2[country]])
          }
        }catch(err){
          console.log(err)
        }
      }
      const fetchRenewable = async (country) => {
        console.log(country)
        try{
          const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_ind_ren?format=JSON&lang=EN&geoLevel=country&time=2022')
          
          console.log(res.data.dimension.geo.category)
            const countrie = JSON.stringify(res.data.dimension.geo.category.index)
          
            const countrie2 = res.data.dimension.geo.category.index
            const data = res.data.value
            if (country==='GR'){
              setRenewable(data[countrie2['EL']])
            }
            if(countrie.includes(JSON.stringify(country))){
            console.log(data[countrie2[country]])
            setRenewable(data[countrie2[country]])
            }
          }catch(err){
            console.log(err)
          }
        }    
        const fetchInflation = async (country) => {
          console.log(country)
          try{
            const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tec00118?format=JSON&lang=EN&geoLevel=country&time=2023')
            
            console.log(res.data.dimension.geo.category)
              const countrie = JSON.stringify(res.data.dimension.geo.category.index)
            
              const countrie2 = res.data.dimension.geo.category.index
              const data = res.data.value
              if (country==='GR'){
                setInflation(data[countrie2['EL']])
              }
              if(countrie.includes(JSON.stringify(country))){
              console.log(data[countrie2[country]])
              setInflation(data[countrie2[country]])
              }
            }catch(err){
              console.log(err)
            }
          } 
          const fetchUnemployemnt = async (country) => {
            console.log(country)
            try{
              const res = await axios.get('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tps00203?format=JSON&lang=EN&geoLevel=country&time=2023')
              
              console.log(res.data.dimension.geo.category)
                const countrie = JSON.stringify(res.data.dimension.geo.category.index)
              
                const countrie2 = res.data.dimension.geo.category.index
                const data = res.data.value
                if (country==='GR'){
                  setUnemploy(data[countrie2['EL']])
                }
                if(countrie.includes(JSON.stringify(country))){
                console.log(data[countrie2[country]])
                setUnemploy(data[countrie2[country]])
                }
              }catch(err){
                console.log(err)
              }
            } 
  return (
    <div id='block_container'>
      <div id='bloc1'>
    <ComposableMap
      width={600}
      height={600}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 800
      }}
    >
       <PatternLines
        id="lines"
        height={6}
        width={6}
        stroke="black"
        strokeWidth={2}
        hover="disabled"
        background="whitesmoke"
        orientation={["diagonal"]}
      />
      <Geographies geography={geoUrl} stroke="#08334e" strokeWidth={0.7} >
      {({ geographies }) =>

              geographies.map((geo) => {
                const isHighlighted = highlighted.indexOf(geo.id) !== -1;
                const isClicked = clickedCity === geo.properties.name;
            return (
                <Geography

                  key={geo.rsmKey}
                  style={{
                    default: {
                      outline: "none"
                    },
                    hover:{fill: "#14b1b9", outline: "none"},
                    
                    pressed: {
                      fill: "#276890",
                      outline: "none"
                    },
                  
                    
                  }}
                  geography={geo}
                  fill={isHighlighted ? "url('#lines')" : "#dadada" }
             
                  
                 
                
                     
                  onMouseOver={() => {
                  
                   
                    if (!isHighlighted){
                      
                      const NAME = geo.properties.NAME;
                     // setCountry(NAME)

                    }
                    

                  }}
                  onMouseLeave={() => {
                 
                  }}
                  onClick={handleClick(geo)}
                />);
                })
        }
       
      </Geographies>
     
    </ComposableMap>
    </div>
 
    <div id='bloc2'> 
      <div class="card">
      {(info===true)?
    <div class="infos">
      <div class="name">
      <img src={countryimg} style={{width:'25px',float:'left', marginRight:'10px'}} alt="card image" class="card__img" />
        <h2>{clickedCity}</h2>
        <h4 style={{color:'#0d6b70',fontSize:'14px'}}>Country facts  <Tooltip title="Figures represent an average range from 2018 to 2022, extracted from Eurostat statistics.. However, if this data is outdated for your country, you can edit it." placement="right">
            <img id='tooltip' src={infob}></img>
            </Tooltip>
</h4> 


      </div>
   
      <ul class="stats" style={{paddingLeft:'0px',paddingTop:'0px',listStyleType:'none'}}>
        <li>
          <h3 style={{margin:'0px'}}>People at risk of poverty or social exclusion:<span style={{color:'#0d6b70'}}>  <input value={poverty} id='input2' name="Res" onChange={e => setPoverty(e.target.value)} />%</span></h3>
          <h4 style={{marginTop:'4px'}}>(as % of the population)</h4>
        </li>
        <li>
        <h3 style={{margin:'0px'}}>Inflation rate:<span style={{color:'#0d6b70'}}> <input value={inflation} id='input2' name="Res" onChange={e => setInflation(e.target.value)} />%</span></h3>
          <h4 style={{marginTop:'4px'}}>(% change compared to previous year)</h4>
        </li>
        <li>
        <h3 style={{margin:'0px'}}>GDP per capita:<span style={{color:'#0d6b70'}}> <input value={gdp} id='input2' style={{width:'60px'}} name="Res" onChange={e => setGDP(e.target.value)} />€</span></h3>
          <h4 style={{marginTop:'4px'}}>(Euro per inhabitant)</h4>
        </li>
        <li>
        <h3 style={{margin:'0px'}}>Unemployment rate<span style={{color:'#0d6b70'}}> <input value={unemploy} id='input2' name="Res" onChange={e => setUnemploy(e.target.value)}/>%</span></h3>
          <h4 style={{marginTop:'4px'}}>(as % of the active population aged 15 - 74 years)
</h4>
        </li>
        <li>
        <h3 style={{margin:'0px'}}>Renewable energy:<span style={{color:'#0d6b70'}}> <input value={renewable} id='input2' name="Res" onChange={e => setRenewable(e.target.value)} />%</span></h3>
          <h4 style={{marginTop:'4px'}}>(as % in gross final energy consumption)</h4>
        </li>
      </ul>
      <div class="links">
        <button class="follow" onClick={(e)=>{Nextpage(clickedCity)}}>Next</button>
      </div>
    </div>:
     <div class="infos">
    <br/>
     <p class="text" style={{marginRight:'40px',fontWeight:600, color:'#08334e'}} >
     Please select a European Union country to proceed</p>
  
   </div>}
  </div>

    

</div>


   </div>
  );
};

export default MapChart;
