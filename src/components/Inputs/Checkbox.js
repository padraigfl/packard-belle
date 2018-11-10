import React from 'react';
import cx from 'classnames';
import Toggle from './Toggle';

import './styles/Checkbox.scss';

const Checkbox = props => (
  <Toggle
    {...props}
    className={ cx('Checkbox', props.className)}
    type="checkbox"
  />
);

Checkbox.propTypes = Toggle.propTypes;

export default Checkbox;
