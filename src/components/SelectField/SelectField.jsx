import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const SelectField = (props) => {
  const {
    options,
    defaultText,
    value,
    ...rest
  } = props;
  const { base } = style;
  return (
    <div>
      <select {...rest} style={base}>
        <option value="blank">{defaultText}</option>
        { options.map(val => <option value={val.value} {...rest}>{val.label}</option>)}
      </select>
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
