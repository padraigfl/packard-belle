import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button';

import './_ButtonProgram.scss';

const ButtonProgram = props => (
  <Button
    className={cx('ButtonProgram', props.className)}
    onClick={props.onClick}
    isActive={props.isActive}
    style={{ backgroundImage: `url(${props.icon})`, ...props.style }}
  >
    {props.children}
  </Button>
);

ButtonProgram.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.any,
};

export default ButtonProgram;
