import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = ({ children, ...rest }) => {
  if (!localStorage.getItem('token')) {
    return (
      <div>
        {children}
        <Footer />
      </div>
    );
  }
  return (
    <Route exact path="/">
      <Redirect to="/trainee" />
    </Route>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AuthLayout;
