import React from 'react';
import { shallow, mount } from 'enzyme';
import StartButton from './ButtonStart';

describe('StartButton', () => {
  it('renders', () => {
    const wrapper = shallow(<StartButton />);
    expect(wrapper.find('.StartButton').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <StartButton className="test" isActive />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
  });

  it('onclick fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<StartButton onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });

  it('onblur fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<StartButton onBlur={clickFunc} />);
    wrapper.simulate('blur');
    expect(clickFunc).toHaveBeenCalled();
  });
});
