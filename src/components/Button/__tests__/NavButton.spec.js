import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import ButtonNav from '../ButtonNav';

describe('ButtonNav', () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonNav />);
    expect(wrapper.find('.ButtonNav').length).toBeTruthy();
  });

  it('No children', () => {
    const wrapper = shallow(<ButtonNav><div id="test" /></ButtonNav>);
    expect(wrapper.find('#test').length).toBeFalsy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ButtonNav
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
    const wrapper = mount(<ButtonNav onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
