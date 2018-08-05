
import React from 'react';
import Toggle from './Toggle';
import '../../_scss/w98/inputs/radio.scss';

const Radio = props => (
  <Toggle
    {...props}
    type="radio"
  />
);

Radio.propTypes = Toggle.propTypes;

export default Radio;
