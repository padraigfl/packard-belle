import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import InputText from '../InputText';

describe('InputText', () => {
  it('renders', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.find('input').at(0).props().type).toBe('text');
  });

  it('renders passed class name', () => {
    const wrapper = shallow(<InputText className="InputText" />);
    expect(wrapper.find('input').hasClass('InputText')).toBeTruthy();
  });

  it('disabled field', () => {
    const wrapper = shallow(<InputText isDisabled />);
    const wrapperProps = wrapper.find('input').at(0).props();
    expect(wrapperProps.disabled).toBe(true);
  });

  it('onchange fires', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<InputText onChange={clickFunc} />);
    wrapper.find('input').simulate('change');
    expect(clickFunc).toHaveBeenCalled();
  });
  it('onblur fires', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<InputText onBlur={clickFunc} />);
    wrapper.find('input').simulate('blur');
    expect(clickFunc).toHaveBeenCalled();
  });
});
