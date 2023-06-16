import React from 'react';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button';

import './_ButtonForm.scss';

const ButtonForm = props => (
  <Button
    className={cx('ButtonForm', props.className)}
    onClick={props.onClick}
    isActive={props.isActive}
    isDisabled={props.isDisabled}
  >
    {props.children}
  </Button>
);

Button.propTypes = {
  ...commonButtonPropTypes,
};

export default ButtonForm;
