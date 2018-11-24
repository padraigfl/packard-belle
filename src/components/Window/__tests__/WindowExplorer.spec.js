import React from 'react';
import { mount } from 'enzyme';
import WindowExplorer from '../WindowExplorer';

xdescribe('WindowExplorer', () => { // eslint-disable-line
  const func = jest.fn();
  const wrapper = mount(<WindowExplorer />);
  it('renders', () => {
    expect(wrapper.find('.WindowExplorer').length).toBeTruthy();
  });

  it('can be clicked', () => {
    wrapper.simulate('click');
    expect(func).toHaveBeenCalled();
  });
});
