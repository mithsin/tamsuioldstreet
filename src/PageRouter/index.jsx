import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotExist } from 'Pages';
import Cart from 'Components/OrderProcess/Cart';

const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/cart" component = { Cart } />
        <Route path='*' exact component={NotExist} />
    </Switch>
  );
}

export default PageRouter;
