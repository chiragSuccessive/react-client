import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const TextField = (props) => {
  const { error, ...rest } = props;
  const errorBorder = error ? style.errorBorder : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...style.base, ...errorBorder }} />
      {error ? <info style={style.errorColor}>{error}</info> : ''}
    </>
  );
};

TextField.propTypes = {
  error: PropTypes.string,
};
TextField.defaultProps = {
  error: '',
};


export default TextField;
