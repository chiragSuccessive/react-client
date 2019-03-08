import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateLayout } from '../layouts';


const PrivateRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <PrivateLayout>
            <Component {...matchProps} />
          </PrivateLayout>
        )}
      />
    );
  }
  return (
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PrivateRoute;
