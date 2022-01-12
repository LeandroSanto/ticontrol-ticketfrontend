import React from 'react';
import { Router } from 'react-router';
import { SideBar } from '../../components/SideBar';
import { NewOrder } from '../NewOrder';

import '../../src/theme/colors.css';
import '../../src/theme/fonts.css';
import '../../src/theme/global.css';

import './styles.css';
import { OrderService } from '../OrderService';

export function Home(){
  return(
    <div className='homeContainer'>
      <SideBar/>
      <OrderService />
    </div>
  )
}