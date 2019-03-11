import PropTypes from 'prop-types';
import React from 'react';

const calculate = (first, second, operator) => {
  if (operator === '+') {
    return (first + second);
  }
  if (operator === '-') {
    return (first - second);
  }
  if (operator === '*') {
    return (first * second);
  }
  if (operator === '/') {
    if (second === 0) {
      return 'infinity';
    }
    return (first / second);
  }
  return 'invalid';
};

const Math = (props) => {
  const {
    first,
    second,
    operator,
    children,
  } = props;
  const result = calculate(first, second, operator);
  if (children) {
    return children(first, second, operator, result);
  }
  return <div>{`${first} ${operator} ${second} = ${result}`}</div>;

};

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  children: PropTypes.func,
};

Math.defaultProps = {
  children: null,
};


export default Math;
