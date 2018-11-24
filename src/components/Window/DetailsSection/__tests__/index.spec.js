import React from 'react';
import { shallow } from 'enzyme';
import DetailsSection from '..';

describe('DetailsSection', () => {
  const wrapper = shallow(
    <DetailsSection title="Test">
      Children
    </DetailsSection>
  );
  it('renders', () => {
    expect(wrapper.find('.DetailsSection').length).toBeTruthy();
  });

  it('has title', () => {
    expect(wrapper.find('.DetailsSection__title').at(0).text()).toBe('Test');
  });
});
