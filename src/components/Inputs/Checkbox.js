import React from 'react';
import Toggle from './Toggle';

import './_checkbox.scss';

const Checkbox = props => (
  <Toggle
    {...props}
    type="checkbox"
  />
);

Checkbox.propTypes = Toggle.propTypes;

export default Checkbox;
