
import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import MenuBar from '..';

const menuOptions = onClick => ([{ title: 'file', options: [{ title: 'open', onClick, className: 'testButton' }] }]);

describe('MenuBar', () => {
  it('renders', () => {
    const wrapper = shallow(<MenuBar />);
    expect(wrapper.find('menu').length).toBeTruthy();
  });

  it('renders button and standard menu if passed props', () => {
    const options = menuOptions(jest.fn());
    const wrapper = mount(<MenuBar className="MenuBar" options={options} />);
    expect(wrapper.find('AbstractButton').length).toBeTruthy();
    expect(wrapper.find('StandardMenu').length).toBeTruthy();
  });


  it('options classes passed through and onclick can be called', () => {
    const func = jest.fn();
    const options = menuOptions(func);
    const wrapper = mount(<MenuBar className="MenuBar" options={options} />);
    expect(wrapper.find('.testButton').length).toBeTruthy();
    wrapper.find('.testButton').at(0).find('button').at(0).simulate('mousedown');
    expect(func).toHaveBeenCalled();
  });
});
