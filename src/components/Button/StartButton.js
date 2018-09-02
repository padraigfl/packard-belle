import React from 'react';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './_start-button.scss';

const StartButton = props => (
  <Button
    className={ classnames('btn--start', props.className) }
    onClick={ props.onClick }
    onBlur={ props.onBlur }
    isActive={ props.isActive }
  />
);

StartButton.propTypes = commonButtonPropTypes;


export default StartButton;
