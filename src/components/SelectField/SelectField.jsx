import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const SelectField = (props) => {
  const {
    options,
    defaultText,
    value,
    error,
    ...rest
  } = props;
  const errorBorder = error ? styles.errorBorder : {};
  return (
    <div>
      <select {...rest} style={{ ...styles.base, ...errorBorder }}>
        <option value="blank">{defaultText}</option>
        { options.map(val => <option value={val.value} {...rest}>{val.label}</option>)}
      </select>
      {error ? <p style={styles.errorColor}>{error}</p> : ''}
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
