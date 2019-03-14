import { Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { AuthLayout as LoginLayout } from '../layouts';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AuthRoute;
