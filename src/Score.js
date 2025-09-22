import * as React from 'react';
import { useState,useEffect } from 'react';
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
import party from "party-js";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import Navbar from './Navbar';
import jsPDF from 'jspdf'
import {app} from './firebase'
import { getStorage, ref, uploadBytes } from '@firebase/storage';
import { storage} from './firebase'
import {v4} from "uuid"
import { db } from './firebase';
import { collection, doc, getDocs,addDoc } from "firebase/firestore";
import ConfettiExplosion from 'react-confetti-explosion';



pdfMake.vfs = pdfFonts.pdfMake.vfs


export default function Score() {
  const [answer1,setAnswer1]= useState(localStorage.getItem('Answer1'))
  const [answer2,setAnswer2]= useState(localStorage.getItem('Answer2'))
  const [answer3,setAnswer3]= useState(localStorage.getItem('Answer3'))
  const [answer4,setAnswer4]= useState(localStorage.getItem('Answer4'))
  const [answer5,setAnswer5]= useState(localStorage.getItem('Answer5'))
  const [answer6,setAnswer6]= useState(localStorage.getItem('Answer6'))
  const [answer7,setAnswer7]= useState(localStorage.getItem('Answer7'))
  const [answer8,setAnswer8]= useState(localStorage.getItem('Answer8'))
  const [answer9,setAnswer9]= useState(localStorage.getItem('Answer9'))
  const [answer10,setAnswer10]= useState(localStorage.getItem('Answer10'))
  const [ans1,setAns]= useState(0)
  const [ans2,setAns2]= useState(0)
  const [ans3,setAns3]= useState(0)
  const [ans4,setAns4]= useState(0)
  const [ans5,setAns5]= useState(0)
  const [ans6,setAns6]= useState(0)
  const [ans7,setAns7]= useState(0)
  const [ans8,setAns8]= useState(0)
  const [ans9,setAns9]= useState(0)
  const [ans10,setAns10]= useState(0)
  const [fscore,SetFscore] = useState(0)
  const [getone,SetgetOne] = useState(0)
  const [getwo,SetgeTwo] = useState(0)
  const [get1,Setget1] = useState(0)
  const [get2,Setget2] = useState(0)
  const [get3,Setget3] = useState(0)
  const [get4,Setget4] = useState(0)
  const [get5,Setget5] = useState(0)
  const [get6,Setget6] = useState(0)
  const [get7,Setget7] = useState(0)
  const [get8,Setget8] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false);

  const [Ec6,SetEc6] = useState(0)
  const [Ec7,SetEc7] = useState(0)
  const [Ec8,SetEc8] = useState(0)
  const [Ec9,SetEc9] = useState(0)
  const [Ec10,SetEc10] = useState(0)
  const [Ec11,SetEc11] = useState(0)
  const [Ec12,SetEc12] = useState(0)
  
  const navigate = useNavigate();
  const minValue = -136;  // Ελάχιστη δυνατή τιμή
  const maxValue = 186;  // Μέγιστη δυνατή τιμή

  function Nextpage() {
    navigate('/Score');
  }
  const totaltoggle = ((
  (parseInt(localStorage.getItem('Env1')))+
  (parseInt(localStorage.getItem('Env2')))+
  (parseInt(localStorage.getItem('Env3')))+
  (parseInt(localStorage.getItem('Env4')))+
  (parseInt(localStorage.getItem('Env5')))+
  (parseInt(localStorage.getItem('Env6')))+
  (parseInt(localStorage.getItem('Env7')))+
  (parseInt(localStorage.getItem('Env8')))+
  (parseInt(localStorage.getItem('Env9')))+


  (parseInt(localStorage.getItem('Ec2')))+
  (parseInt(localStorage.getItem('Ec3')))+
  (parseInt(localStorage.getItem('Ec4')))+
  (parseInt(localStorage.getItem('Ec5')))+
  (parseInt(localStorage.getItem('Ec6')))+
  (parseInt(localStorage.getItem('Ec7')))+
  (parseInt(localStorage.getItem('Ec8')))+
  (parseInt(localStorage.getItem('Ec9')))+
  (parseInt(localStorage.getItem('Ec10')))+
  (parseInt(localStorage.getItem('Ec11')))+
  (parseInt(localStorage.getItem('Ec12')))+

  (parseInt(localStorage.getItem('So1')))+
  (parseInt(localStorage.getItem('So2')))+
  (parseInt(localStorage.getItem('So3')))+
  (parseInt(localStorage.getItem('So4')))+
  (parseInt(localStorage.getItem('So5')))+
  (parseInt(localStorage.getItem('So6')))+
  (parseInt(localStorage.getItem('So7')))+
  (parseInt(localStorage.getItem('So8')))

)/28)*100

const totaltoggle2 = (
  (parseInt(localStorage.getItem('Env1')))+
  (parseInt(localStorage.getItem('Env2')))+
  (parseInt(localStorage.getItem('Env3')))+
  (parseInt(localStorage.getItem('Env4')))+
  (parseInt(localStorage.getItem('Env5')))+
  (parseInt(localStorage.getItem('Env6')))+
  (parseInt(localStorage.getItem('Env7')))+
  (parseInt(localStorage.getItem('Env8')))+
  (parseInt(localStorage.getItem('Env9')))+


 
  (parseInt(localStorage.getItem('Ec2')))+
  (parseInt(localStorage.getItem('Ec3')))+
  (parseInt(localStorage.getItem('Ec4')))+
  (parseInt(localStorage.getItem('Ec5')))+
  (parseInt(localStorage.getItem('Ec6')))+
  (parseInt(localStorage.getItem('Ec7')))+
  (parseInt(localStorage.getItem('Ec8')))+
  (parseInt(localStorage.getItem('Ec9')))+
  (parseInt(localStorage.getItem('Ec10')))+
  (parseInt(localStorage.getItem('Ec11')))+
  (parseInt(localStorage.getItem('Ec12')))+

  (parseInt(localStorage.getItem('So1')))+
  (parseInt(localStorage.getItem('So2')))+
  (parseInt(localStorage.getItem('So3')))+
  (parseInt(localStorage.getItem('So4')))+
  (parseInt(localStorage.getItem('So5')))+
  (parseInt(localStorage.getItem('So6')))+
  (parseInt(localStorage.getItem('So7')))+
  (parseInt(localStorage.getItem('So8')))
)
console.log(totaltoggle2,totaltoggle,'gtgtgtgt')
 
const storage = getStorage()
const dataCollectionRef =collection(db,"data")
const calibratedScore = ((totaltoggle - minValue) / (maxValue - minValue)) * 100;
const finaltoggle = Math.min(100, Math.max(0, calibratedScore));
console.log(finaltoggle,"sdsdsdsds")

   const createPDF =() =>{
    const pdfGenerator = pdfMake.createPdf(docDefinition)
    console.log(pdfGenerator)
    
    pdfGenerator.download('JETforCE Technology Evaluation Tool Assessment.pdf')
   }
   useEffect(() => {
    if(localStorage.getItem('Env7')== -2)
      {
      SetgetOne('No')
      }else{
      SetgetOne('Yes')
      }
      if(localStorage.getItem('Env9')== -2)
      {
      SetgeTwo('No')
      }else{
      SetgeTwo('Yes')
      }
      if(localStorage.getItem('So1')== -1)
      {
      Setget1('No')
      }else{
      Setget1('Yes')
      }
      if(localStorage.getItem('So2')== -1)
      {
      Setget2('No')
      }else{
      Setget2('Yes')
      }
      if(localStorage.getItem('So3')== -1)
      {
      Setget3('No')
      }else{
      Setget3('Yes')
      }
      if(localStorage.getItem('So4')== -2)
      {
      Setget4('No')
      }else{
      Setget4('Yes')
      }
      if(localStorage.getItem('So5')== -1)
      {
      Setget5('No')
      }else{
      Setget5('Yes')
      }
      if(localStorage.getItem('So6')== -2)
      {
      Setget6('No')
      }else if(localStorage.getItem('So6')== 2){
      Setget6('Yes')
      }else{
      Setget6('No applicable')
      }
      if(localStorage.getItem('So7')== -1)
      {
      Setget7('No')
      }else{
      Setget7('Yes')
      }
      if(localStorage.getItem('So8')== -2)
      {
      Setget8('No')
      }else{
      Setget8('Yes')
      }
      if(localStorage.getItem('Ec6')== -1)
        {
        SetEc6('No')
        }else{
        SetEc6('Yes')
        }
        if(localStorage.getItem('Ec7')== 1)
        {
        SetEc7('No')
        }else{
        SetEc7('Yes')
        }
        if(localStorage.getItem('Ec8')== 1)
        {
        SetEc8('No')
        }else{
        SetEc8('Yes')
        }
        if(localStorage.getItem('Ec9')== 1)
        {
        SetEc9('No')
        }else{
        SetEc9('Yes')
        }
        if(localStorage.getItem('Ec10')== -1)
        {
        SetEc10('No')
        }else{
        SetEc10('Yes')
        }
        if(localStorage.getItem('Ec11')== -2)
        {
        SetEc11('No')
        }else if(localStorage.getItem('Ec11')== 1){
        SetEc11('Yes')
        }
        if(localStorage.getItem('Ec12')== -2)
        {
        SetEc12('No')
        }else{
        SetEc12('Yes')
        }
   }, []);
   useEffect(()=>{
    if( getone && getwo && get1 && get2 && get3 && get4 && get5 && get6 && get7 && get8 && Ec6 && Ec7 && Ec8 && Ec9 && Ec10 && Ec11 && Ec12) {

      
    
  

const extractPercentage = (answer) => {
  try {
    const match = answer.match(/(\d{1,2})%/); // Βρίσκει 1 ή 2 ψηφία πριν το '%'
    return match ? parseInt(match[1]) : 0;
  } catch (error) {
    return null;
  }
};

setAns(extractPercentage(answer1));
setAns2(extractPercentage(answer2));
setAns3(extractPercentage(answer3));
setAns4(extractPercentage(answer4));
setAns5(extractPercentage(answer5));
setAns6(extractPercentage(answer6));
setAns7(extractPercentage(answer7));
setAns8(extractPercentage(answer8));
setAns9(extractPercentage(answer9));
setAns10(extractPercentage(answer10));

setTimeout(() => {
  onSubmit();
}, 2000);
}
}, [getone, getwo, get1, get2, get3, get4, get5, get6, get7, get8, Ec6, Ec7, Ec8, Ec9, Ec10, Ec11, Ec12]);


useEffect(() => {
  if (fscore >= 70) { // Εμφάνιση confetti αν το σκορ είναι 50+%
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Σταματά μετά από 3 δευτερόλεπτα
  }
}, [fscore]);



console.log(ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10)
  const totalChatGPT = (ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8+ans9+ans10)/10

  const onSubmit = async () =>{
    
    await addDoc(dataCollectionRef,{
      country:localStorage.getItem('country'),
      Env_q1:localStorage.getItem('Env1'),
      Env_q2:localStorage.getItem('Env2'),
      Env_q3:localStorage.getItem('Env3'),
      Env_q4:localStorage.getItem('Env7'),
      Env_q5:localStorage.getItem('Env8'),
      Env_q6:localStorage.getItem('Env9'),
      So_q1:localStorage.getItem('So1'),
      So_q2:localStorage.getItem('So2'),
      So_q3:localStorage.getItem('So3'),
      So_q4:localStorage.getItem('So4'),
      So_q5:localStorage.getItem('So5'),
      So_q6:localStorage.getItem('So6'),
      So_q7:localStorage.getItem('So7'),
      So_q8:localStorage.getItem('So8'),
      Eco_q1:localStorage.getItem('Ec1'),
      Eco_q2:localStorage.getItem('Ec2'),
      Eco_q3:localStorage.getItem('Ec3'),
      Eco_q4:localStorage.getItem('Ec4'),
      Eco_q5:localStorage.getItem('Ec5'),
      Eco_q6:localStorage.getItem('Ec6'),
      Eco_q7:localStorage.getItem('Ec7'),
      Eco_q8:localStorage.getItem('Ec8'),
      Eco_q9:localStorage.getItem('Ec9'),
      Eco_q10:localStorage.getItem('Ec10'),
      Eco_q11:localStorage.getItem('Ec11'), 
      Eco_q12:localStorage.getItem('Ec12'),
      Score_En_So_Eco:finaltoggle+'%',
      ΑΙ_q1:'What environmental impacts does the technology have, particularly for communities that may be disproportionately affected by environmental harms?',
      ΑΙ_ans1:localStorage.getItem('Question1'),
      ΑΙ_ans1_score:localStorage.getItem('Answer1'),
  
      ΑΙ_q2:'What are the anticipated socio-economic benefits of implementing this technology for local communities? For example, how will it affect local economies, access to services, or standard of living?',
      ΑΙ_ans2:localStorage.getItem('Question2'),
      ΑΙ_ans2_score:localStorage.getItem('Answer2'),
  
      ΑΙ_q3:'What are the financing options for the project in the region? (e.g., private investment, public funding, grants, loans)',
      ΑΙ_ans3:localStorage.getItem('Question3'),
      ΑΙ_ans3_score:localStorage.getItem('Answer3'),
  
      ΑΙ_q4:'Which communities have ownership or a stake in the technology, either in terms of financial returns or decision-making? If so, which communities and how?',
      ΑΙ_ans4:localStorage.getItem('Question4'),
      ΑΙ_ans4_score:localStorage.getItem('Answer4'),
  
      ΑΙ_q5:'How does the local regulatory and policy environment impact the economic feasibility of the technology or project? (e.g., supportive energy policies, tax policies, regulations for clean energy or innovation)',
      ΑΙ_ans5:localStorage.getItem('Question5'),
      ΑΙ_ans5_score:localStorage.getItem('Answer5'),
      ΑΙ_q6:'What are the upfront and ongoing costs of implementing the technology, and how do they compare to the long-term benefits, particularly for vulnerable communities?',
      ΑΙ_ans6:localStorage.getItem('Question6'),
      ΑΙ_ans6_score:localStorage.getItem('Answer6'),
  
      ΑΙ_q7:'How does the technology or investment positively impact the wellbeing of communities (e.g., health, education/upskilling, or local development)?',
      ΑΙ_ans7:localStorage.getItem('Question7'),
      ΑΙ_ans7_score:localStorage.getItem('Answer7'),
  
      ΑΙ_q8:'How will the project create jobs in the region? (Consider both direct and indirect employment, including long-term job creation and temporary construction or installation jobs)',
      ΑΙ_ans8:localStorage.getItem('Question8'),
      ΑΙ_ans8_score:localStorage.getItem('Answer8'),
  
      ΑΙ_q9:'How does the technology foster long-term community engagement and empowerment?',
      ΑΙ_ans9:localStorage.getItem('Question9'),
      ΑΙ_ans9_score:localStorage.getItem('Answer9'),

      ΑΙ_q10:'Will communities have ownership or a stake in thetechnology, either in terms of financial returns or decision-making? If so, how?',
      ΑΙ_ans10:localStorage.getItem('Question10'),
      ΑΙ_ans10_score:localStorage.getItem('Answer10'),
    })
  }
  

  const FinalScore = (  totalChatGPT+finaltoggle) /2
  let ScoreFinal = Math.round(FinalScore)
  console.log("the score is",ScoreFinal)
  console.log("totaltoggle is",totaltoggle, totalChatGPT)
    useEffect(()=>{
    if (ScoreFinal>=0){
      SetFscore(ScoreFinal)
    }else{
      SetFscore(0)
    }  if (totalChatGPT>0){
    const pdfGenerator = pdfMake.createPdf(docDefinition)
    const imageRef = ref(storage,`Pdf's/${'pdf_' + Date.now()}`)
    const metadata = {
     contentType: 'application/pdf',
   };
  pdfGenerator.getBuffer((data) => {
  uploadBytes(imageRef, data, metadata).then(() => {
    console.log('uploaded');
  });
});   } 
   },[FinalScore])

  const docDefinition ={
    content :[
   
 {image: 'image1', width: 170, alignment:'right'}," ",
    {text:`Technology Evaluation Tool`,style:'style4'}," ",    
    {text:`Total Score: ${Math.trunc(( totalChatGPT+finaltoggle) /2)}%`,style:'header'}," ",

//question 1
    {text:`Question #1`,style:'style2'},
    {text:`What environmental impacts does the technology have, particularly for communities that may be disproportionately affected by environmental harms?`}," ",
    {text:`Answer`,style:'style2'},   
    `${localStorage.getItem('Question1')}`," ",
    {text:`${localStorage.getItem('Answer1')}`, style:'style3'}, " ",
//question 2 
    {text:`Question #2`,style:'style2'},
    {text:`What are the anticipated socio-economic benefits of implementing this technology for local communities? For example, how will it affect local economies, access to services, or standard of living?`}," ",
    {text:`Answer`,style:'style2'},    
    `${localStorage.getItem('Question2')}`," ",
    {text:`${localStorage.getItem('Answer2')}`, style:'style3'}, " ",
//question 3  
    {text:`Question #3`,style:'style2'},
    {text:`What are the financing options for the project in the region? (e.g., private investment, public funding, grants, loans)`}," ",
    {text:`Answer`,style:'style2'}, 
    `${localStorage.getItem('Question3')}`," ",
    {text:`${localStorage.getItem('Answer3')}`, style:'style3'}, " ",
//question 4  
    {text:`Question #4`,style:'style2'},
    {text:`Which communities have ownership or a stake in the technology, either in terms of financial returns or decision-making? If so, which communities and how?`}," ",
    {text:`Answer`,style:'style2'},   
    `${localStorage.getItem('Question4')}`," ",
    {text:`${localStorage.getItem('Answer4')}`, style:'style3'}," ",
//question 5  
    {text:`Question #5`,style:'style2'},
    {text:`How does the local regulatory and policy environment impact the economic feasibility of the technology or project? (e.g., supportive energy policies, tax policies, regulations for clean energy or innovation)`}," ",
    {text:`Answer`,style:'style2'},
    `${localStorage.getItem('Question5')}`," ",
    {text:`${localStorage.getItem('Answer5')}`, style:'style3'}," ",
//question 6  
    {text:`Question #6`,style:'style2'},
    {text:`What are the upfront and ongoing costs of implementing the technology, and how do they compare to the long-term benefits, particularly for vulnerable communities?`}," ",
    {text:`Answer`,style:'style2'},   
    `${localStorage.getItem('Question6')}`," ",
    {text:`${localStorage.getItem('Answer6')}`, style:'style3'}," ",
    //question 7  
    {text:`Question #7`,style:'style2'},
    {text:`How does the technology or investment positively impact the wellbeing of communities (e.g., health, education/upskilling, or local development)? `}," ",
    {text:`Answer`,style:'style2'}, 
    `${localStorage.getItem('Question7')}`," ",
    {text:`${localStorage.getItem('Answer7')}`, style:'style3'}," ",
    //question 8  
    {text:`Question #8`,style:'style2'},
    {text:`How will the project create jobs in the region? (Consider both direct and indirect employment, including long-term job creation and temporary construction or installation jobs)`}," ",
    {text:`Answer`,style:'style2'},   
    `${localStorage.getItem('Question8')}`," ",
    {text:`${localStorage.getItem('Answer8')}`, style:'style3'}," ",
    //question 9 
    {text:`Question #9`,style:'style2'},
    {text:`How does the technology foster long-term community engagement and empowerment?`}," ",
    {text:`Answer`,style:'style2'},  
    `${localStorage.getItem('Question9')}`," ",
    {text:`${localStorage.getItem('Answer9')}`, style:'style3'}," ",
    //question 10
    {text:`Question #10`,style:'style2'},
    {text:`Will communities have ownership or a stake in the technology, either in terms of financial returns or decision-making? If so, how?`}," ",
    {text:`Answer`,style:'style2'},  
    `${localStorage.getItem('Question10')}`," ",
    {text:`${localStorage.getItem('Answer10')}`, style:'style3'}," ",
    // Enviromental,Social,Economic
    {text:`Enviromental Impact`,style:'style5'}," ",
    {
      table: {
          headerRows: 1,
          widths: ['70%', '30%'],
          body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Answer', style: 'tableHeader' }],
              ['What is the estimated percentage decrease in carbon emissions?', `${localStorage.getItem('Env1number')}%`],
              ['By what percentage is electricity usage expected to decrease?', `${localStorage.getItem('Env2number')}%`],
              ['By what percentage is heat usage expected to decrease?', `${localStorage.getItem('Env3number')}%`],
              ['By what percentage is waste generation expected to be reduced?', `${localStorage.getItem('Env4number')}%`],
              ['By what percentage is water usage expected to decrease?', `${localStorage.getItem('Env5number')}%`],
              ['By what percentage is fuel consumption expected to decrease?', `${localStorage.getItem('Env6number')}%`],
              ['Does the technology incorporate renewable energy sources?', getone],
              ['By what percentage is fossil energy consumption expected to decrease?', `${localStorage.getItem('Env8number')}%`],
              ['Does the technology promote long-term environmental benefits?', getwo],
          ]
      }
  }, " "," ",

  { text: `Social Impact`, style: 'style5' }, " ",
  {
      table: {
          headerRows: 1,
          widths: ['70%', '30%'],
          body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Answer', style: 'tableHeader' }],
              ['Are there specific measures to ensure equal benefits distribution?', `${get1}`],
              ['Does the technology contribute to increased community engagement?', `${get2}`],
              ['Does the technology contribute to increased public consultations?', `${get3}`],
              ['Does the technology increase accessibility for marginalized groups?', `${get4}`],
              ['Will there be increased education of stakeholders?', `${get5}`],
              ['Does the investment support transport solutions in rural areas?', `${get6}`],
              ['Does the technology contribute to strategic partnerships?', get7],
              ['Will the technology reduce pollution or prevent environmental injustices?', `${get8}`],
          ]
      }
  }," ",
  { text: `Economic Impact`, style: 'style5' }, " ",
  {
      table: {
          headerRows: 1,
          widths: ['70%', '30%'],
          body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Answer', style: 'tableHeader' }],
              ['What are the total implementation costs of the project?', `${localStorage.getItem('Ec1')}€`],
              ['What is the expected payback period of the project or investment?', `${localStorage.getItem('Ec2value')} years`],
              ['What is the return on investment (ROI)?', `${localStorage.getItem('ROIvalue')}%`],
              ['What is the estimated incremental revenue growth rate of the given technology or project/investment?', `${localStorage.getItem('Energyvalue')}%`],
              ['By what percentage are energy costs expected to decrease as a result of implementing this technology or project?', `${localStorage.getItem('growthvalue')}%`],
              ['Is there potential for local value chains to benefit from the technology or investment (e.g., will local suppliers be used for materials, services, or support)?', `${Ec6}`],
              ['Is this technology/investment expected to create new jobs?', Ec7],
              ['Is this project or investment related to training & education?  ', `${Ec8}`],
              ['Does the project encourage skills development or capacity building that will enhance the workforce and economy in the region specifically?  ', `${Ec9}`],
              ['Can the technology or project be scaled up for broader adoption in the region or even exported to other regions or countries? ', `${Ec10}`],
              ['Is there a clear demand for the technology or product in the region? (Consider factors such as market size, growth potential, and regional energy needs.) ', `${Ec11}`],
              ['Does the technology reduce the energy cost burden for end-users, particularly low-income households?', `${Ec12}`],
          ]
      }
  }
],
images:{
  "image1" : `https://jetforce-1d009.web.app/static/media/image.36bd8dd902b6e1e0315e.png`
},
styles: {
  header: {
      fontSize: 17,
      bold: true,
      color: '#08334e',
      alignment: "center"
  },

  anotherStyle:{
    italics:true,
    alignment:"right",
  },
  style2:{
    color:'#139ca3',
  },
  style3:{
    color:'#601111',
  },
  style4:{
    fontSize: 20,
    alignment: "center"
  },
  style5: {
      fontSize: 15,
      color: '#163e57',
      alignment: "left"
  },
  tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'white',
      fillColor: '#139ca3'
  }
}
};
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const svgScore = fscore;
  return (
    <>
    <Navbar/>
    <br/>
    <div className='container'>
      <div className='center'>
           
</div>
<br/>
<div className='center-screen'>
<div  id='container3' style={{borderRadius:'10px',backgroundColor:'#ececec',width:'50%'}}>
<h3 style={{color:'#08334e',textAlign:'center'}}className='question'>Your Final Score!</h3>
<div className="score-wrap">
      <div className="score">     {showConfetti && (
        <ConfettiExplosion
          force={0.6} 
          duration={3000} 
          particleCount={150} 
          width={1600}
        />
      )}
        <div className="score-bar">
          <div className="placeholder">{progressBar(100)}</div>
          <div className="score-circle">{progressBar(svgScore, true)}</div>
        </div>
        <div className="score-value">
          <div className="score-name">Score</div>
          <div className="score-number">{fscore}%</div>
     
        </div>
      </div>
    </div>
    <p style={{textAlign:'center'}}>Download the .pdf file to see detailed results</p>
    <div class="links">
        <button onClick={(e)=>{createPDF()}} style={{alignItems:'center',height:'35px'}} class="follow2">Download .pdf</button>
      </div>
</div>

</div> </div>
   </>
  );
}
function progressBar(widthPerc, gradient = false) {
  const radius = 65;
  const dashArray = (Math.PI * radius * widthPerc) / 100;

  return (
    <svg width="200" height="120">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        strokeWidth="25"
        strokeLinecap="round"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${dashArray} 10000`}
        stroke={gradient ? "url(#score-gradient)" : "#e1e1e1"}
      ></circle>
      {gradient && (
        <defs>
          <linearGradient id="score-gradient">
            <stop offset="0%" stopColor="#77d1d6" />
            <stop offset="25%" stopColor="#139ca3" />
            <stop offset="100%" stopColor="#08334e" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}