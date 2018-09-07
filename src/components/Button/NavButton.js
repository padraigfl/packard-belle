import React from 'react';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/NavButton.scss';

const NavButton = props => (
  <Button
    className={ classnames('NavButton', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    isDisabled={ props.isDisabled }
  />
);

NavButton.propTypes = commonButtonPropTypes;

export default NavButton;
