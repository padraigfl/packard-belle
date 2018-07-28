import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';

const NavButton = props => (
  <Button
    className={ classnames('btn--small-icon', props.className) }
    onClick={ props.onClick }
    disabled={ props.disabled }
    isActive={ props.isActive }
  >
    <img src={props.icon} />
  </Button>
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
};


export default NavButton;
