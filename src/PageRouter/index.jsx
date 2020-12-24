import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotExist, Admin, AdminLogin } from 'Pages';
import { Cart, Payment } from 'Components/OrderProcess';
import PrivateRoute from './PrivateRoute';


const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/cart" component = { Cart } />
        <Route exact path="/payment" component = { Payment } />
        <Route exact path="/ichot/admin-login" component = { AdminLogin } />
        <PrivateRoute exact path="/admin" component = { Admin } />
        <Route path='*' component={NotExist} />
    </Switch>
  );
}

export default PageRouter;
