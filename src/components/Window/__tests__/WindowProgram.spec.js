import React from 'react';
import { mount } from 'enzyme';
import WindowProgram from '../WindowProgram';

const options = (onClick = jest.fn()) => ([
  { title: 'testButton', options: [{ title: 'testOption', onClick }]},
  { title: 'test', options: [{ title: 'testOption', onClick }]},
]);

describe('WindowProgram', () => {
  const func = jest.fn();
  const wrapper = mount(
    <WindowProgram
      className="WindowProgram"
      menuOptions={options(func)}
    >
      <div className="test" />
    </WindowProgram>
  );
  it('renders', () => {
    expect(wrapper.find('.WindowProgram').length).toBeTruthy();
  });
  it('hasChildren', () => {
    expect(wrapper.find('.test').length).toBeTruthy();
  });
  it('has menus', () => {
    expect(wrapper.find('.WindowProgram__menu').length).toBeTruthy();
    expect(wrapper.find('.standard-menu-wrapper')).toHaveLength(2);
  });
});
