
import React from 'react';
import {
  mount,
} from 'enzyme';
import Notifications, { Time } from '../Notifications';

const menuOptions = (onClick = jest.fn()) => ([
  { alt: 'open', onClick, title: 'testButton' },
  { alt: 'find', onClick, options: 'testOption' },
]);

describe('Notifications', () => {
  const func = jest.fn();
  const options = menuOptions(func);
  const wrapper = mount(<Notifications className="Notifications" notifiers={options} />);
  const notifers = wrapper.find('Notifier');
  it('renders', () => {
    expect(wrapper.find('.TaskBar__notifications').length).toBeTruthy();
    expect(notifers).toHaveLength(2);
    expect(wrapper.find(Time).length).toBeTruthy();
  });

  it('can be clicked', () => {
    notifers.forEach(notifier => notifier.simulate('click'));
    expect(func).toHaveBeenCalledTimes(2);
  });
});
