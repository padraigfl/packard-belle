import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const NavButton = props => (
  <Button
    className={ classnames('btn--nav', props.className) }
    onClick={ props.onClick }
  />
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};


export default NavButton;
