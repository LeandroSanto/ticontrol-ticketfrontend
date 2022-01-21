import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SideBar } from './components/SideBar';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NewClient } from './pages/NewClient';
import { NewOrder } from './pages/NewOrder';
import { OrderService } from './pages/OrderService';

export function Routes(){
  return(
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/newclient" component={NewClient} />
        <Route path="/neworder" component={NewOrder} />
        <Route path="/orderservice" component={OrderService} />
      </Switch>
    </BrowserRouter>
  )
}