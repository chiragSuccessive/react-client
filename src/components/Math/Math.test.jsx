import React from 'react';
import { shallow } from 'enzyme';
import Math from './Math';

describe('Math', () => {
  const props = {
    first: 5,
    second: 1,
    operator: '+',
  };

  test('first value check', () => {
    const wrapper = shallow(<Math {...props} />);
    expect(wrapper.props().children).toBe('5 + 1 = 6');
  });
});
