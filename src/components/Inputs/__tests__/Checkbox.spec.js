import React from 'react';
import {
  shallow,
} from 'enzyme';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('uses toggle with radio type', () => {
    const wrapper = shallow(<Checkbox label="test" />);
    expect(wrapper.find('Toggle').at(0).props().type).toBe('checkbox');
  });
});
