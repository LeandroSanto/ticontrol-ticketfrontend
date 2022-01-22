import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { SideBar } from './components/SideBar';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NewClient } from './pages/NewClient';
import { NewOrder } from './pages/NewOrder';
import { OrderService } from './pages/OrderService';

import './src/theme/app.css'

export function Rotas(){
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/newclient" element={ <NewClient /> } />
        <Route path="/neworder" element={ <NewOrder /> } />
        <Route path="/orderservice" element={ <OrderService /> } />
      </Routes>
    </BrowserRouter>
  )
}