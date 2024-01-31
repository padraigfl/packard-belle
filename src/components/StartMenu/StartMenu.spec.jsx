import React from 'react';
import { shallow } from 'enzyme';
import StartMenu from './StartMenu';

describe('StartMenu', () => {
  it('renders', () => {
    const wrapper = shallow(<StartMenu />);
    expect(wrapper.find('.StartMenu').length).toBeTruthy();
  });
});
