import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  it('renders', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.find('input').length).toBeTruthy();
  });

  it('renders div when passed class', () => {
    const wrapper = shallow(<Toggle className="Toggle" />);
    expect(wrapper.find('div').length).toBeTruthy();
  });

  it('checking states with props', () => {
    const wrapper = shallow(<Toggle isDisabled checked />);
    const wrapperProps = wrapper
      .find('input')
      .at(0)
      .props();
    expect(wrapperProps.disabled).toBe(true);
    expect(wrapperProps.checked).toBe(true);
  });

  it('onchange fires', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<Toggle onChange={clickFunc} id="testing" />);
    wrapper.find('input').simulate('change');
    expect(clickFunc).toHaveBeenCalled();
  });
});
