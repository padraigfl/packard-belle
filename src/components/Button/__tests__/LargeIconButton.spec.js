import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import LargeIconButton from '../LargeIconButton';
import AbstractButton from '../AbstractButton';

describe('LargeIconButton', () => {
  it('renders', () => {
    const wrapper = shallow(<LargeIconButton />);
    expect(wrapper.find('.btn--large-icon').length).toBeTruthy();
  });

  it('renders icon', () => {
    const wrapper = mount(<LargeIconButton icon="TEST" title="TEST"/>);
    expect(wrapper.find('img').props().src).toBe('TEST');
    expect(wrapper.find(AbstractButton).props().children[1]).toBe('TEST');
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <LargeIconButton
        className="test"
        isActive
        isDisabled
      />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(false);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<LargeIconButton onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
