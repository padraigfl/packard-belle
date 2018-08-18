import React from 'react';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import '../../_scss/w98/buttons/btn--nav.scss';

const NavButton = props => (
  <Button
    className={ classnames('btn--nav', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    isDisabled={ props.isDisabled }
  />
);

NavButton.propTypes = commonButtonPropTypes;

export default NavButton;
