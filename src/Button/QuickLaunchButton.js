import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const NavButton = props => (
  <Button
    className={ classnames('btn--quick-launch', props.className) }
    onClick={ props.onClick }
    style={ { backgroundImage: `url(${props.icon})` }}
  />
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
};


export default NavButton;
