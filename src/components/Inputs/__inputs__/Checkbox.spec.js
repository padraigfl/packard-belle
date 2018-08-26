import React from 'react';
import {
  shallow,
} from 'enzyme';
import Checkboc from '../Checkboc';

describe('Checkboc', () => {
  it('uses toggle with radio type', () => {
    const wrapper = shallow(<Checkboc label="test" />);
    expect(wrapper.find('Toggle').at(0).props().type).toBe('checkboc');
  });
});
