import React from 'react';
import { mount } from 'enzyme';
import TaskBar from '../TaskBar';

const menuOptions = (onClick = jest.fn()) => [
  { alt: 'open', onClick, title: 'testButton', icon: 'icon1' },
  { alt: 'find', onClick, title: 'testOption', icon: 'icon2' },
];

describe('TaskBar', () => {
  const quickLaunchFunc = jest.fn();
  const notiferFunc = jest.fn();
  const programFunc = jest.fn();
  const wrapper = mount(
    <TaskBar
      options={menuOptions(jest.fn())}
      quickLaunch={menuOptions(quickLaunchFunc)}
      openWindows={menuOptions(programFunc)}
      notifiers={menuOptions(notiferFunc)}
    />
  );
  it('renders all as expected', () => {
    expect(wrapper.find('.TaskBar').length).toBeTruthy();
    expect(wrapper.find('.TaskBar__quick-launch').length).toBeTruthy();
    expect(wrapper.find('Notifier')).toHaveLength(2);
    expect(wrapper.find('ButtonProgram')).toHaveLength(2);
    expect(wrapper.find('ButtonIconSmall')).toHaveLength(2);
  });

  it('only renders quicklaunch holder when passed props', () => {
    wrapper.setProps({ quickLaunch: null });
    expect(wrapper.find('.TaskBar__quick-launch').length).toBeFalsy();
  });
});
