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
import axios from 'axios';
import Navbar from "./Navbar";
import { CircularProgress } from "@mui/joy";




const API_KEY = process.env.REACT_APP_API_KEY

export default function Question2() {
  const navigate = useNavigate();
  const [question2, setQuestion2] = useState("");
  const [response, setResponse] = useState('');
  function Nextpage() {

    if(question2!==""){
      sendMessage()
      setTimeout(() => {
       console.log(response)
       navigate('/Question3');
     }, 1500);
      }
  }
  useEffect(()=>{
    if(question2=="" && localStorage.getItem("Question2") ){
      console.log(2)
      setQuestion2(localStorage.getItem("Question1"))
      console.log(question2)
    }
},[])

  const sendMessage = async () => {
    console.log(question2)
    const input = `
Question: What are the anticipated socio-economic benefits of implementing this technology for local communities? 
For example, how will it affect local economies, access to services, or standard of living? 

Answer: ${question2} 

Provide only a total score percentage for the answer based on the following criteria: 
Relevance, Particularity, Expertise, Effect, Value, Innovation, Expediency, Track record, Commitment, Clarity, and Professionalism. 

Your response should not exceed 80 words.
`;
    console.log(input)
    try {
      const answer = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: "system", content: "You are an AI assistant that evaluates answers based on specific criteria and gives a total score." }, 
            { role: "user", content: input }
        ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

   
      // Update the conversation history with the response from ChatGPT
      setResponse(answer.data.choices[0].message.content);
      localStorage.setItem("Answer2", answer.data.choices[0].message.content);
      localStorage.setItem("Question2", question2);
  
    } catch (error) {
      console.error('Error sending message:', error);
    }
   
  };

  const handleQuestion2Change = e => {
    setQuestion2(e.target.value);
 }


  return (
    <>
    <Navbar/>
    <br/>
    <div className='container'>
    <div style={{float:'right'}}>
   <h4 style={{float:'inline-start',color:'whitesmoke', paddingRight:'10px'}}>Progress</h4>
  <CircularProgress size="lg"   style={{ color: "#0e8d93" }} determinate value={35.7}>
        <p style={{color:'whitesmoke'}}>35.7%</p>
      </CircularProgress>
      </div>
      <div className='center'  id='mobile'>
           

<br/>
<div  id='container3' style={{borderRadius:'10px',backgroundColor:'#ececec',marginTop:'100px'}}>
  <div>
 
    <h4 style={{color:'#139ca3'}}className='question'>Question #2</h4>
    <p>What are the anticipated socio-economic benefits of implementing this technology for local communities? For example, how will it affect local economies, access to services, or standard of living?</p>
    <h4 className='question'style={{color:'#139ca3'}}>Answer</h4>
    <Textarea minRows={5} style={{maxWidth:'100%'}} value={question2}  onChange={handleQuestion2Change}/>
                <br/>
      </div>
      <div class="links">
      <button className="follow" onClick={() => navigate('/Question1')}>Back</button>
        <button class="follow" style={{float:'right'}}onClick={(e)=>{Nextpage()}}>Next</button>
      </div>
</div>
   </div></div>
   </>
  );
}