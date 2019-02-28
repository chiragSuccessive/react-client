import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../layouts';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <PrivateLayout>
        <Component {...matchProps} />
      </PrivateLayout>
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PrivateRoute;
