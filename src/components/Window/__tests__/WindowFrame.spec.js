
import React from 'react';
import { shallow } from 'enzyme';
import WindowFrame from '../WindowFrame';

const options = (onClick = jest.fn()) => ([
  { alt: 'open', onClick, title: 'testButton' },
  { alt: 'find', onClick, options: 'testOption' },
]);

describe('WindowFrame', () => {
  const func = jest.fn();
  const wrapper = shallow(<WindowFrame className="WindowFrame" {...options(func)[0]} />);

  it('renders', () => {
    expect(wrapper.find('.Frame').length).toBeTruthy();
  });

  it('accepts classes and props', () => {
    wrapper.setProps({ className: 'test' });
    expect(wrapper.render().hasClass('test')).toBe(true);
  });
});
