import React from 'react';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button';

import './_StartButton.scss';

const StartButton = props => (
  <Button
    className={cx('StartButton', props.className)}
    onClick={props.onClick}
    onBlur={props.onBlur}
    isActive={props.isActive}
  />
);

StartButton.propTypes = commonButtonPropTypes;

export default StartButton;
