import React from 'react';
import PropTypes from 'prop-types';

const Math = (props) => {
  PropTypes = {
    first: PropTypes.number.isRequired,
    second: PropTypes.number.isRequired,
    operator: PropTypes.operator,
    children: PropTypes.func,
  };
  return <div>{props}</div>;
};

export default Math;
