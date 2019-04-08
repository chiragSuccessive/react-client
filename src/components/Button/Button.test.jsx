import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

let wrapper;
const spy = sinon.spy();
describe('Button field checking', () => {
  beforeEach(() => {
    wrapper = shallow(<Button />);
    wrapper.setProps({
      onClick: spy,
      value: '',
      disabled: false,
    });
    spy.resetHistory();
  });
  it('renders button', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('checking disabled', () => {
    expect(wrapper.find('button').props().disabled).toBe(false);
  });
  it('checking onClick', () => {
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });
});
