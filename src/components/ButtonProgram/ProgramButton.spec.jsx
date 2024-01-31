import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonProgram from '../ButtonProgram';
import AbstractButton from '../Button';

describe('ButtonProgram', () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonProgram />);
    expect(wrapper.find('.ButtonProgram').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(
      <ButtonProgram>
        <div id="test" />
      </ButtonProgram>
    );
    expect(wrapper.find('#test').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ButtonProgram className="test" isActive isDisabled />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(false);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<ButtonProgram onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });

  it('icon is passed into style', () => {
    const wrapper = mount(<ButtonProgram icon="ICON" />);
    expect(wrapper.find(AbstractButton).props().style.backgroundImage).toBe(
      'url(ICON)'
    );
  });
});
