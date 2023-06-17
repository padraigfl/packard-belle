
import React from 'react';
import { mount } from 'enzyme';
import Notifier from '../Notifier';

const options = (onClick = jest.fn()) => ([
  { alt: 'open', onClick, title: 'testButton' },
  { alt: 'find', onClick, options: 'testOption' },
]);

describe('Notifier', () => {
  const func = jest.fn();
  const wrapper = mount(<Notifier className="Notifier" {...options(func)[0]} />);
  it('renders', () => {
    expect(wrapper.find('.Notifier').length).toBeTruthy();
  });

  it('can be clicked', () => {
    wrapper.simulate('click');
    expect(func).toHaveBeenCalled();
  });
});
