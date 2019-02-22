import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Button = (props) => {
  const {
    onClick,
    value,
    disabled,
    ...rest
  } = props;
  return (
    <>
      <button type="button" onClick={onClick} disabled={disabled} {...rest} style={{ ...style.base }}>{value}</button>
    </>
  );
};

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  style: {},
  color: 'primary',
  disabled: false,
};

export default Button;
