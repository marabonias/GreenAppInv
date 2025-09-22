import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './jetforcelogo2.png'
import { useUserAuth } from './context/UserAuthContext';

export default function Navbar() {
  const {user, logOut} = useUserAuth()
  const handleLogOut = async() =>{
    try{
     localStorage.clear();
     await logOut()
    }catch(err) {
      console.log(err.message)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#dddddd" }}>
        <Toolbar>
         
         
            <img src={logo} style={{width:'150px'}}></img>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button id='button' onClick={handleLogOut} sx={{ bgcolor: "#0e8d93",color:'whitesmoke' }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}