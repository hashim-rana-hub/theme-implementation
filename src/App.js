import logo from './logo.svg';
import './App.css';
import { Box, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import {darkTheme, lightTheme} from "./styles/Theme"

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
    <ThemeProvider theme={toggle? {...darkTheme} : {...lightTheme} }>
    <div className="App">
      <Switch onChange={()=> setToggle(!toggle)} />
      <Box sx={{
        width: "200px",
        height: "200px",
        backgroundColor: "primary.main",
        border: "1px solid green"
      }}>
      
      </Box>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
