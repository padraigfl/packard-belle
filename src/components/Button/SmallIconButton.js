import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/SmallIconButton.scss';

const SmallIconButton = props => (
  <Button
    className={ classnames('SmallIconButton', props.className) }
    onClick={ props.onClick }
    isDisabled={ props.isDisabled }
    isActive={ props.isActive }
  >
    <img src={props.icon} />
  </Button>
);

SmallIconButton.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
};


export default SmallIconButton;
