import React from 'react';
import { shallow } from 'enzyme';
import WindowAbstract from '../WindowAbstract';

describe('WindowAbstract', () => {
  const func = jest.fn();
  const wrapper = shallow(<WindowAbstract />);
  it('renders all constants', () => {
    expect(wrapper.find('.Window').length).toBeTruthy();
    expect(wrapper.find('.Window__heading').length).toBeTruthy();
    expect(wrapper.find('.Window__title').length).toBeTruthy();
  });

  it('displays correct heading buttons', () => {
    wrapper.setProps({ onHelp: jest.fn(), onClose: jest.fn(), resizable: true });
    expect(wrapper.find('.Window__close').length).toBeTruthy();
    expect(wrapper.find('.Window__maximize').length).toBeTruthy();
    expect(wrapper.find('.Window__minimize').length).toBeTruthy();
    expect(wrapper.find('.Window__help').length).toBeTruthy();
  });
});
