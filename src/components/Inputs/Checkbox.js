import React from 'react';
import Toggle from './Toggle';
import '../../_scss/w98/inputs/toggle.scss';
import '../../_scss/w98/inputs/checkbox.scss';

const Checkbox = props => (
  <Toggle
    {...props}
    type="checkbox"
  />
);

Checkbox.propTypes = Toggle.propTypes;

export default Checkbox;
