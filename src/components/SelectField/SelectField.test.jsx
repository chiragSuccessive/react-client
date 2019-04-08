import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SelectField from './SelectField';
import * as constants from '../../config/constants';

let wrapper;
const spy = sinon.spy();
describe('SelectField field checking', () => {
  beforeEach(() => {
    wrapper = shallow(<SelectField />);
    wrapper.setProps({
      options: constants.options,
      defaultText: 'select',
      value: '',
      error: '',
      onChange: spy,
    });
    spy.resetHistory();
  });
  it('renders button', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('selectField options length', () => {
    expect(wrapper.find('option').length).toEqual(3);
  });
  it('first option value', () => {
    expect(wrapper.find('option').at(0).props().value).toBe('blank');
  });
  it('second option value', () => {
    expect(wrapper.find('option').at(1).props().value).toBe('football');
  });
  it('third option value', () => {
    expect(wrapper.find('option').at(2).props().value).toBe('cricket');
  });
  it('first option children', () => {
    expect(wrapper.find('option').at(0).props().children).toBe('select');
  });
  it('second option children', () => {
    expect(wrapper.find('option').at(1).props().children).toBe('football');
  });
  it('checking error', () => {
    wrapper.setProps({
      error: 'error in selection',
    });
    expect(wrapper.find('p').props().children).toBeTruthy();
  });
  it('checking onChange')
});
