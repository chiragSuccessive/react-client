import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const TextField = (props) => {
  const { error, ...rest } = props;
  const errorBorder = error ? styles.errorBorder : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...styles.base, ...errorBorder }} />
      {error ? <p style={styles.errorColor}>{error}</p> : ''}
    </>
  );
};

TextField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
TextField.defaultProps = {
  error: '',
  value: '',
  onChange: () => {},
};


export default TextField;
