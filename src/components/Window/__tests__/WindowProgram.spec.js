import React from 'react';
import { mount } from 'enzyme';
import WindowAbstract from '../WindowAbstract';

const options = (onClick = jest.fn()) => ([
  { alt: 'open', onClick, title: 'testButton' },
  { alt: 'find', onClick, options: 'testOption' },
]);

describe('WindowAbstract', () => {
  const func = jest.fn();
  const wrapper = mount(<WindowAbstract className="WindowAbstract" {...options(func)[0]} />);
  it('renders', () => {
    expect(wrapper.find('.WindowAbstract').length).toBeTruthy();
  });

  it('can be clicked', () => {
    wrapper.simulate('click');
    expect(func).toHaveBeenCalled();
  });
});
