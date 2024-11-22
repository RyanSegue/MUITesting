import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Navigation/Router';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{height: '1000px'}}>
      <Box sx={{height: '5%'}}>
        <Header />
      </Box>
      <Box sx={{height: '90%'}}>
        <div className="App">
          <header className="App-header">
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
          </header>
        </div>
      </Box>
    </Box>
  );
}

export default App;
