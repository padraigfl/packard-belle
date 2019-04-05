import React from 'react';
import Toggle from '../FormToggle/Toggle';

import './_Radio.scss';

const Radio = props => <Toggle {...props} className="Radio" type="radio" />;

Radio.propTypes = Toggle.propTypes;

export default Radio;
