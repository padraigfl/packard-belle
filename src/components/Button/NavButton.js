import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';

const NavButton = props => (
  <Button
    className={ classnames('btn--nav', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
  />
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};


export default NavButton;
