import React from 'react';
import { shallow } from 'enzyme';
import ExplorerIcon from './IconExplorerIcon';

describe('ExplorerIcon', () => {
  it('uses AbstractIcon', () => {
    const wrapper = shallow(<ExplorerIcon />);
    expect(wrapper.find('AbstractIcon').length).toBeTruthy();
  });
});
