import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Radio = (props) => {
  const {
    value,
    options,
    onChange,
    error,
    ...rest
  } = props;

  return (
    <>
      {options.map(val => (
        <div>
          <input type="radio" onChange={onChange} checked={val.value === value} value={val.value} {...rest} />
          {val.label}
        </div>
      ))}
      {error ? <p style={style.errorColor}>{error}</p> : ''}
    </>
  );
};

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf),
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  value: '',
  error: '',
  onChange: () => {},
  options: [],
};
export default Radio;
