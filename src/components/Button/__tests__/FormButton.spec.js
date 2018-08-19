import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import FormButton from '../FormButton';

describe('FormButton', () => {
  it('renders', () => {
    const wrapper = shallow(<FormButton />);
    expect(wrapper.find('.btn--form').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(<FormButton><div id="test" /></FormButton>);
    expect(wrapper.find('#test').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <FormButton
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
    const testString = 'TestString';
    const wrapper = mount(<FormButton onClick={clickFunc}>{testString}</FormButton>);
    wrapper.simulate('click');
    expect(document.activeElement.innerHTML).toBe(testString);
    expect(clickFunc).toHaveBeenCalled();
  });
});
