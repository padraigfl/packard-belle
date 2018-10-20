import React from 'react';
import {
  shallow,
} from 'enzyme';
import ExplorerView from '../ExplorerView';

describe('ExplorerView', () => {
  it('renders', () => {
    const wrapper = shallow(<ExplorerView />);
    expect(wrapper.find('.ExplorerView').length).toBeTruthy();
  });

  it('accepts classes passed in', () => {
    const wrapper = shallow(
      <ExplorerView
        className="test"
        fixedHeight
        fixedWidth
      />
    ).render();
    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.hasClass('ExplorerView--fixed-height')).toBe(true);
    expect(wrapper.hasClass('ExplorerView--fixed-width')).toBe(true);
  });
});
