import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonForm from './ButtonForm';

describe('ButtonForm', () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonForm />);
    expect(wrapper.find('.ButtonForm').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(
      <ButtonForm>
        <div id="test" />
      </ButtonForm>
    );
    expect(wrapper.find('#test').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ButtonForm className="test" isActive isDisabled />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const testString = 'TestString';
    const wrapper = mount(
      <ButtonForm onClick={clickFunc}>{testString}</ButtonForm>
    );
    wrapper.simulate('click');
    expect(document.activeElement.innerHTML).toBe(testString);
    expect(clickFunc).toHaveBeenCalled();
  });
});
