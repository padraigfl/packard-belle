import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button';

import './_ButtonIconSmall.scss';

const ButtonIconSmall = props => (
  <Button
    className={cx('ButtonIconSmall', props.className)}
    onClick={props.onClick}
    isDisabled={props.isDisabled}
    isActive={props.isActive}
    title={props.title}
  >
    <img src={props.icon} />
  </Button>
);

ButtonIconSmall.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
};

export default ButtonIconSmall;
