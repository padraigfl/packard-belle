import React from 'react';
import { shallow } from 'enzyme';
import SelectMultipleSimple from './SelectMultipleSimple';

describe('SelectMultipleSimple', () => {
  it('renders', () => {
    const wrapper = shallow(
      <SelectMultipleSimple options={[{ value: 'abc' }, { value: 'def' }]} />
    );
    expect(wrapper.find('div.SelectMultipleSimple').length).toBeTruthy();
    expect(wrapper.find('option')).toHaveLength(2);
  });

  it('whole box can be disabled', () => {
    const wrapper = shallow(
      <SelectMultipleSimple isDisabled options={[{ value: 'abc' }]} />
    );
    expect(wrapper.find('select').props().disabled).toBe(true);
  });

  xit('needs more tests, low priority', () => {});
});
