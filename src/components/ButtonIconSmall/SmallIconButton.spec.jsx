import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonIconSmall from './ButtonIconSmall';

describe('ButtonIconSmall', () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonIconSmall />);
    expect(wrapper.find('.ButtonIconSmall').length).toBeTruthy();
  });

  it('renders icon', () => {
    const wrapper = mount(<ButtonIconSmall icon="TEST" />);
    expect(wrapper.find('img').props().src).toBe('TEST');
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ButtonIconSmall className="test" isActive isDisabled />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<ButtonIconSmall onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
