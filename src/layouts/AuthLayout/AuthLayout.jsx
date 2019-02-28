import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const AuthLayout = ({ children, ...rest }) => {
  console.log('--------6--------');

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
