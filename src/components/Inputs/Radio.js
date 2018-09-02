
import React from 'react';
import Toggle from './Toggle';

import './styles/Radio.scss';

const Radio = props => (
  <Toggle
    {...props}
    className="Radio"
    type="radio"
  />
);

Radio.propTypes = Toggle.propTypes;

export default Radio;
