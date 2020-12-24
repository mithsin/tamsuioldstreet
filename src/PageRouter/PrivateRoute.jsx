import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userIsLoggedIn } from 'States/userSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userSignIn = useSelector(userIsLoggedIn);

  return (
    <Route {...rest} render={(props) => (
      userSignIn === true
        ? <Component {...props} />
        : <Redirect to='/ichot/admin-login' />
    )} />
  )
};

export default PrivateRoute;