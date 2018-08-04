import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';

import '../../_scss/w98/buttons/btn--large-icon.scss';

const NavButton = props => (
  <Button
    className={ classnames('btn--large-icon', props.className) }
    onClick={ props.onClick }
    disabled={ props.disabled }
  >
    <img src={props.icon} />
    { props.title }
  </Button>
);

NavButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};


export default NavButton;
