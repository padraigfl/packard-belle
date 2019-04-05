import React from 'react';
import { shallow, mount } from 'enzyme';
import AbstractButton from './Button';

describe('AbstractButton', () => {
  it('renders', () => {
    const wrapper = shallow(<AbstractButton />);
    expect(wrapper.find('button').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(
      <AbstractButton>
        <div id="test" />
      </AbstractButton>
    );
    expect(wrapper.find('#test').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <AbstractButton className="test" isActive isDisabled />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('btn--active')).toBe(true);
    expect(wrapper.hasClass('btn--disabled')).toBe(true);
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const testString = 'TestString';
    const wrapper = mount(
      <AbstractButton onClick={clickFunc}>{testString}</AbstractButton>
    );
    wrapper.simulate('click');
    expect(document.activeElement.innerHTML).toBe(testString);
    expect(clickFunc).toHaveBeenCalled();
  });

  it('onMouseDown onMouseUp', () => {
    const wrapper = shallow(<AbstractButton />);
    wrapper.simulate('mousedown');
    expect(wrapper.state().mouseDown).toBe(true);
    wrapper.simulate('mouseup');
    expect(wrapper.state().mouseDown).toBe(false);
  });

  it('onDoubleClick if passed in as prop', () => {
    const dblClck = jest.fn();
    const wrapper = shallow(<AbstractButton />);
    wrapper.simulate('doubleclick');
    wrapper.setProps({ onDoubleClick: dblClck });
    wrapper.simulate('doubleclick');
    expect(dblClck).toHaveBeenCalled();
  });

  it('onBlur if passed in as prop', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<AbstractButton />);
    wrapper.simulate('blur');
    wrapper.setProps({ onBlur });
    wrapper.simulate('blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('onContextMenu on works if passed in as prop', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
    const onContextMenu = jest.fn();
    const wrapper = mount(<AbstractButton />);
    wrapper.simulate('contextmenu');
    expect(onContextMenu).not.toHaveBeenCalled();

    wrapper.setProps({ onContextMenu });
    wrapper.simulate('contextmenu', mockEvent);
    expect(onContextMenu).toHaveBeenCalled();
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});
