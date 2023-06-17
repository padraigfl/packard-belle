import React from 'react';
import { shallow } from 'enzyme';
import WindowAbstract from './Window';

describe('WindowAbstract', () => {
  const wrapper = shallow(
    <WindowAbstract onHelp={jest.fn()} onClose={jest.fn()} resizable />
  );
  it('renders all constants', () => {
    expect(wrapper.find('.Window').length).toBeTruthy();
    expect(wrapper.find('.Window__heading').length).toBeTruthy();
    expect(wrapper.find('.Window__title').length).toBeTruthy();
  });

  it('displays correct heading buttons', () => {
    expect(wrapper.find('.Window__close').length).toBeTruthy();
    expect(wrapper.find('.Window__maximize').length).toBeTruthy();
    expect(wrapper.find('.Window__help').length).toBeTruthy();
    wrapper.setState({ maximized: true });
    expect(wrapper.find('.Window__restore').length).toBeTruthy();
  });
});
