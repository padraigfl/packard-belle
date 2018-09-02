import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './_small-icon-button.scss';

const NavButton = props => (
  <Button
    className={ classnames('btn--small-icon', props.className) }
    onClick={ props.onClick }
    isDisabled={ props.isDisabled }
    isActive={ props.isActive }
  >
    <img src={props.icon} />
  </Button>
);

NavButton.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
};


export default NavButton;
