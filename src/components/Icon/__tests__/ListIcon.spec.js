import React from 'react';
import {
  shallow,
} from 'enzyme';
import ListIcon from '../ExplorerIcon';

describe('ListIcon', () => {
  it('uses AbstractIcon', () => {
    const wrapper = shallow(<ListIcon />);
    expect(wrapper.find('AbstractIcon').length).toBeTruthy();
  });
});
