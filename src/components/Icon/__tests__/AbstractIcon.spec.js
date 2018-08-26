import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import AbstractIcon from '../AbstractIcon';

describe('AbstractIcon', () => {
  it('renders', () => {
    const wrapper = shallow(<AbstractIcon />);
    expect(wrapper.find('div').length).toBeTruthy();
  });

  it('renders button when passed onclick', () => {
    const wrapper = shallow(<AbstractIcon onClick={jest.fn()}/>);
    expect(wrapper.find('button').length).toBeTruthy();
  });

  it('onclick focuses and fires prop', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<AbstractIcon onClick={clickFunc} />);
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });

  it('onDoubleClick if passed in as prop', () => {
    const dblClck = jest.fn();
    const wrapper = shallow(<AbstractIcon onDoubleClick={dblClck} />);
    wrapper.simulate('doubleclick');
    wrapper.setProps({ onDoubleClick: dblClck });
    wrapper.simulate('doubleclick');
    expect(dblClck).toHaveBeenCalled();
  });

  it('onContextMenu on works if passed in as prop', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
    const onContextMenu = jest.fn();
    const wrapper = mount(<AbstractIcon onClick={jest.fn()} />);
    wrapper.simulate('contextmenu');
    expect(onContextMenu).not.toHaveBeenCalled();

    wrapper.setProps({ onContextMenu });
    wrapper.simulate('contextmenu', mockEvent);
    expect(onContextMenu).toHaveBeenCalled();
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
