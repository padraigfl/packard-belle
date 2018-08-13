import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import '../../_scss/w98/buttons/btn--large-icon.scss';

const NavButton = props => (
  <Button
    className={ classnames('btn--large-icon', props.className) }
    onClick={ props.onClick }
    isDisabled={ props.isDisabled }
  >
    <img src={props.icon} />
    { props.title }
  </Button>
);

NavButton.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
  title: PropTypes.title,
};


export default NavButton;
