import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const PrivateLayout = ({ children, ...rest }) => (
  <>
    <Navbar />
    <div>
      {children}
    </div>
  </>
);

PrivateLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PrivateLayout;

