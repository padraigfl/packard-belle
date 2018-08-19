import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import SmallIconButton from '../SmallIconButton';

describe('SmallIconButton', () => {
  it('renders', () => {
    const wrapper = shallow(<SmallIconButton />);
    expect(wrapper.find('.btn--small-icon').length).toBeTruthy();
  });

  it('renders icon', () => {
    const wrapper = mount(<SmallIconButton icon="TEST" />);
    expect(wrapper.find('img').props().src).toBe('TEST');
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <SmallIconButton
        className="test"
        isActive
        isDisabled
      />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<SmallIconButton onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
