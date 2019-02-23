import React, { Component } from 'react';
import * as yup from 'yup';
import {
  TextField,
  SelectField,
  Radio,
  Button,
} from '../../components';
import * as constants from '../../config/constants';

const schema = yup.object().shape({
  name: yup.string().min(3).required().label('Name'),
  sports: yup.string().required().label('Sport'),
  sportsValue: yup.string().required().label('What you do'),
});

class InputDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      sports: '',
      sportsValue: '',
      error: {
        name: '',
        sports: '',
        sportsValue: '',
      },
      isTouched: {
        name: false,
        sports: false,
        sportsValue: false,
      },
      hasError: {
        name: false,
        sports: false,
        sportsValue: false,
      },
    };
  }

  handleValue = item => (event) => {
    const { error, isTouched, hasError } = this.state;
    this.setState({
      [item]: event.target.value,
      error: { ...error, [item]: '' },
      isTouched: { ...isTouched, [item]: true },
      hasError: { ...hasError, [item]: false },
    });
  };

  handleValidation = item => () => {
    const {
      name,
      sports,
      sportsValue,
      error,
      isTouched,
      hasError,
    } = this.state;

    schema.validate({ name, sports, sportsValue }, { abortEarly: false })
      .then(this.setState({ isTouched: { ...isTouched, [item]: true } }))
      .catch((err) => {
        err.inner.forEach((res) => {
          if (res.path === item) {
            this.setState({
              error: { ...error, [item]: res.message },
              hasError: { ...hasError, [item]: true },
            });
          }
        });
      });
  }

  buttonChecked = () => {
    const { hasError, isTouched } = this.state;
    let notError = 0;
    let touched = 0;
    let result = false;
    Object.keys(hasError).forEach((i) => {
      if (hasError[i] === false) {
        notError += 1;
      }
    });
    Object.keys(isTouched).forEach((i) => {
      if (isTouched[i] === true) {
        touched += 1;
      }
    });
    if (notError === 3 && touched === 3) {
      result = true;
    } else if (notError !== 3 && touched !== 3) {
      result = false;
    }
    return result;
  }

  render() {
    const {
      name,
      sports,
      sportsValue,
      error,
    } = this.state;
    return (
      <>
        <h3>Name</h3>
        <TextField value={name} onChange={this.handleValue('name')} onBlur={this.handleValidation('name')} error={error.name} />
        <h3>Select the game you play?</h3>
        <SelectField
          options={constants.options}
          onChange={this.handleValue('sports')}
          onBlur={this.handleValidation('sports')}
          error={error.sports}
        />
        {sports ? (
          <div>
            <h3>What you do?</h3>
            <Radio
              value={sportsValue}
              options={constants[sports]}
              onChange={this.handleValue('sportsValue')}
              onBlur={this.handleValidation('sportsValue')}
              error={error.sportsValue}
            />
          </div>
        ) : (
          ''
        )}
        <div style={{ textAlign: 'right' }}>
          <Button value="Cancel" />
          {(this.buttonChecked()) ? <Button value="Submit" color={{ backgroundColor: '#42f448', color: 'white' }} /> : <Button value="Submit" disabled />}
        </div>
      </>
    );
  }
}
export default InputDemo;
