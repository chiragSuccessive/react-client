import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const SelectField = (props) => {
  const {
    options,
    defaultText,
    value,
    error,
    ...rest
  } = props;
  const errorBorder = error ? style.errorBorder : {};
  return (
    <div>
      <select {...rest} style={{ ...style.base, ...errorBorder }}>
        <option value="blank">{defaultText}</option>
        { options.map(val => <option value={val.value} {...rest}>{val.label}</option>)}
      </select>
      {error ? <p style={style.errorColor}>{error}</p> : ''}
    </div>
  );
};

SelectField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  defaultText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

SelectField.defaultProps = {
  value: '',
  error: '',
  onChange: () => {},
  defaultText: 'Select',
  options: [],
};
export default SelectField;
