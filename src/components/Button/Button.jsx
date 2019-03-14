import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = (props) => {
  const {
    onClick,
    value,
    disabled,
    color,
    ...rest
  } = props;
  return (
    <>
      <button type="button" onClick={onClick} disabled={disabled} {...rest} style={{ ...styles.base, ...color }}>{value}</button>
    </>
  );
};

Button.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  styles: {},
  color: 'primary',
  disabled: false,
};

export default Button;
