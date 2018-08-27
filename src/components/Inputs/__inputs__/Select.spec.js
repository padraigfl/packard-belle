import React from 'react';
import Select from 'react-select';
import {
  shallow,
} from 'enzyme';
import WSelect from '../Select';

describe('Select', () => {
  it('renders react select', () => {
    const wrapper = shallow(<WSelect options={[{ value: 'abc' }, { value: 'def'} ]} />);
    expect(wrapper.find(Select).length).toBeTruthy();
  });

  it('renders options', () => {
    const options = [{ value: 'abc' }, { value: 'def'} ];
    const wrapper = shallow(<WSelect options={options} />);
    expect(wrapper.find(Select).at(0).props().options).toBe(options);
  });

  it('whole box can be disabled', () => {
    const wrapper = shallow(<WSelect isDisabled options={[{ value: 'abc' }]} />);
    expect(wrapper.find(Select).props().disabled).toBe(true);
  });

  it('no state value if controlled component', () => {
    const wrapper = shallow(<WSelect options={[{ value: 'abc' }]} onChange={jest.fn()}/>);
    expect(wrapper.state().value).toBe(null);
  });

  it('state value if controlled component, uses prop value as initial value', () => {
    const wrapper = shallow(<WSelect options={[{ value: 'abc' }]} value="abc" />);
    expect(wrapper.state().value).toBe('abc');
  });

  xit('needs more tests, low priority', () => {

  });
});
