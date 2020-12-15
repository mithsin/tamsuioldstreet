import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const userSignIn = true;
  return (
    <Route {...rest} render={(props) => (
      userSignIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
};

export default PrivateRoute;