import React, { Component } from 'react';
import { TextField, SelectField, Radio } from '../../components';
import * as constants from '../../config/constants';

class InputDemo extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      sports: '',
      cricket: '',
      football: '',
      doValue: '',
    };
  }

  handleValueChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSportChange = (event) => {
    this.setState({ sports: event.target.value, cricket: '', football: '' });
  };

  handleSportValueChange = (event) => {
    const { sports } = this.state;
    this.setState({
      [sports]: event.target.value,
      doValue: event.target.value,
    });
  };

  render() {
    const { value, sports, doValue } = this.state;

    console.log('state', this.state);
    return (
      <>
        <h3>Name</h3>
        <TextField value={value} onChange={this.handleValueChange} />
        <h3>Select the game you play?</h3>
        <SelectField
          options={constants.options}
          onChange={this.handleSportChange}
        />
        {sports ? (
          <div>
            <h3>What you do?</h3>
            <Radio
              value={doValue}
              options={constants[sports]}
              onChange={this.handleSportValueChange}
            />
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}
export default InputDemo;
