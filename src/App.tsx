import React from 'react';
import { SideBar } from './components/SideBar';

import { Rotas } from './rotas';

import './src/theme/app.css';

import './src/theme/colors.css';
import './src/theme/fonts.css';
import './src/theme/global.css';


function App() {
  return (
    <div className='appcontainer'>
        <SideBar />
        <Rotas />
    </div>
  );
}

export default App;
