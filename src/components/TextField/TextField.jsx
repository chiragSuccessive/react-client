import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const TextField = (props) => {
  const { error, ...rest } = props;
  const errorBorder = error ? style.errorBorder : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...style.base, ...errorBorder }} />
      {error ? <p style={style.errorColor}>{error}</p> : ''}
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
