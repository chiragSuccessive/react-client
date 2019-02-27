import React from 'react';
import PropTypes from 'prop-types';

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
    return <div>{`${first} ${operator} ${second} = ${result}`}</div>;
  }
  return children(first, second, operator, result);
};

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  children: PropTypes.func,
};

Math.defaultProps = {
  children: () => (false),
};


export default Math;
