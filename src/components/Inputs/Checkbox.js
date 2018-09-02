import React from 'react';
import classnames from 'classnames';
import Toggle from './Toggle';

import './styles/Checkbox.scss';

const Checkbox = props => (
  <Toggle
    {...props}
    className={classnames('Checkbox', props.className)}
    type="checkbox"
  />
);

Checkbox.propTypes = Toggle.propTypes;

export default Checkbox;
