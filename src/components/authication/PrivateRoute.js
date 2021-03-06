import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const email = useSelector((state) => state.auth.authdetails.email) 
  // console.log(email); 
    return (
        <Route
        {...rest}
        render={({ location }) =>
        email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute