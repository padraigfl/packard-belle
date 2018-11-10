import React from 'react';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/ButtonNav.scss';

const ButtonNav = props => (
  <Button
    className={ cx('ButtonNav', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    isDisabled={ props.isDisabled }
  />
);

ButtonNav.propTypes = commonButtonPropTypes;

export default ButtonNav;
