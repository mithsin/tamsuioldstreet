import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotExist } from 'Pages';

const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
        <Route path='*' exact component={NotExist} />
    </Switch>
  );
}

export default PageRouter;
