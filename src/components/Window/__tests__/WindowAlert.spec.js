import React from 'react';
import { shallow } from 'enzyme';
import WindowAlert from '../WindowAlert';

describe('WindowAlert', () => {
  const func = jest.fn();
  const wrapper = shallow(<WindowAlert onOK={func} onCancel={func} />);
  it('renders', () => {
    expect(wrapper.find('.WindowAlert').length).toBeTruthy();
  });

  it('can be clicked', () => {
    wrapper.find('.WindowAlert__cancel').at(0).simulate('click');
    wrapper.find('.WindowAlert__ok').at(0).simulate('click');
    expect(func).toHaveBeenCalledTimes(2);
  });
});
