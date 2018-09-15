import React from 'react';
import {
  shallow,
} from 'enzyme';
import ExplorerView from '../ExplorerView';
import ExplorerIcon from '../../Icon/ExplorerIcon';

const noop = () => {};
const options = [
  { title: 'Test0', onClick: noop, icon: '' },
  { title: 'Test1', onClick: noop, icon: '' },
];

describe('ExplorerView', () => {
  it('renders', () => {
    const wrapper = shallow(<ExplorerView />);
    expect(wrapper.find('.ExplorerView').length).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(<ExplorerView options={options} />);
    expect(wrapper.find(ExplorerIcon)).toHaveLength(2);
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
