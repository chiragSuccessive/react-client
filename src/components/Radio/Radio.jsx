import React from 'react';
import PropTypes from 'prop-types';


const Radio = (props) => {
  const {
    value,
    options,
    onChange,
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
