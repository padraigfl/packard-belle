import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import ProgramButton from '../ProgramButton';
import AbstractButton from '../AbstractButton';

describe('ProgramButton', () => {
  it('renders', () => {
    const wrapper = shallow(<ProgramButton />);
    expect(wrapper.find('.btn--program').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(<ProgramButton><div id="test" /></ProgramButton>);
    expect(wrapper.find('#test').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ProgramButton
        className="test"
        isActive
        isDisabled
      />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(false);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<ProgramButton onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });

  it('icon is passed into style', () => {
    const wrapper = mount(<ProgramButton icon="ICON" />);
    expect(wrapper.find(AbstractButton).props().style.backgroundImage).toBe('url(ICON)');
  });
});
