import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'Pages';

const PageRouter = () => {
  return (
    <Switch>
        <Route exact path="/" component = { Home } />
    </Switch>
  );
}

export default PageRouter;
