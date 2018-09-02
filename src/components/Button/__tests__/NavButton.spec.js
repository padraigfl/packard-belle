import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import NavButton from '../NavButton';

describe('NavButton', () => {
  it('renders', () => {
    const wrapper = shallow(<NavButton />);
    expect(wrapper.find('.NavButton').length).toBeTruthy();
  });

  it('No children', () => {
    const wrapper = shallow(<NavButton><div id="test" /></NavButton>);
    expect(wrapper.find('#test').length).toBeFalsy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <NavButton
        className="test"
        isActive
        isDisabled
      />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<NavButton onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
