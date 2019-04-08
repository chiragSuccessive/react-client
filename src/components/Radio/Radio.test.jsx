import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import * as constants from '../../config/constants';
import Radio from './Radio';

let wrapper;
const spy = sinon.spy();
describe('Radio field checking', () => {
  beforeEach(() => {
    wrapper = shallow(<Radio />);
    wrapper.setProps({
      value: '',
      error: '',
      onChange: spy,
      options: constants.football,
    });
    spy.resetHistory();
  });
  it('renders radio', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('input', () => {
    expect(wrapper.find('input').length).toEqual(2);
    wrapper.setProps({
      value: '',
      error: '',
      onChange: () => {},
      options: constants.cricket,
    });
    expect(wrapper.find('input').length).toEqual(4);
  });
  // it('value check', () => {
  //   expect(wrapper.find('button').props()).toBe('hi');
  // });
  it('checking onClick', () => {
    const event = {
      target: {
        value: 'defender',
      },
    };
    wrapper.find('input').at(0).simulate('change', event);
    expect(spy.called).toBe(true);
  });

  it('checking value', () => {
    expect(wrapper.find('input').at(0).props().value).toBe('Defender');
    expect(wrapper.find('input').at(1).props().value).toBe('Striker');
    wrapper.setProps({
      value: '',
      error: '',
      onChange: () => {},
      options: constants.cricket,
    });
    expect(wrapper.find('input').at(0).props().value).toBe('Wicket Keeper');
    expect(wrapper.find('input').at(1).props().value).toBe('Batsman');
  });
});
