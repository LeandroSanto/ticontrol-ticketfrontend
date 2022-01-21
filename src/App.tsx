import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes';

import './src/theme/app.css';

import './src/theme/colors.css';
import './src/theme/fonts.css';
import './src/theme/global.css';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
