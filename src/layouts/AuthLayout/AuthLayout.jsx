import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const AuthLayout = ({ children, ...rest }) => {
  return (
  <div>
    {children}
    <Footer />
  </div>
);
  }
AuthLayout.propTypes = {
  // children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AuthLayout;
