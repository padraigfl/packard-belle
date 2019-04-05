import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectBox from './SelectBox';

describe('SelectBox', () => {
  it('renders', () => {
    const wrapper = shallow(<SelectBox options={[]} />);
    expect(wrapper.find('div.SelectBox').length).toBeTruthy();
  });

  it('whole box can be disabled', () => {
    const wrapper = shallow(<SelectBox isDisabled options={[]} />);
    expect(wrapper.find('div.SelectBox.disabled').length).toBeTruthy();
  });

  it('uses passed component for options', () => {
    const FakeComp = () => <div />;
    const wrapper = shallow(
      <SelectBox
        isDisabled
        options={[
          { value: 'abc', title: 'def' },
          { value: 'ghi', title: 'jkl' },
        ]}
        component={FakeComp}
      />
    );
    expect(wrapper.find(FakeComp)).toHaveLength(2);
  });

  it('selected options have is-active class', () => {
    const options = [
      { value: 'abc', title: 'def' },
      { value: 'ghi', title: 'jkl' },
    ];
    const wrapper = mount(<SelectBox isDisabled options={options} />);
    expect(wrapper.find('.is-active')).toHaveLength(0);

    wrapper.setProps({ selected: 'ghi' });
    expect(wrapper.find('.is-active')).toHaveLength(1);

    wrapper.setProps({ selected: ['abc', 'ghi'] });
    expect(wrapper.find('.is-active')).toHaveLength(2);
  });
});
