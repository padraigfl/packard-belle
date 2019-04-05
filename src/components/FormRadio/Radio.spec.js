import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio', () => {
  it('uses toggle with radio type', () => {
    const wrapper = shallow(<Radio label="test" />);
    expect(
      wrapper
        .find('Toggle')
        .at(0)
        .props().type
    ).toBe('radio');
  });
});
