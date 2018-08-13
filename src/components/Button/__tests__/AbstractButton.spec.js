import React from 'react';
import {
  shallow,
} from 'enzyme';
import AbstractButton from '../AbstractButton';

describe('AbstractButton', () => {
  it('renders', () => {
    const wrapper = shallow(<AbstractButton />);
    expect(wrapper.find('button').length).toBeTruthy();
  });
});
