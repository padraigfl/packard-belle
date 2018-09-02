import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/LargeIconButton.scss';

const LargeIconButton = props => (
  <Button
    className={ classnames('LargeIconButton', props.className) }
    onClick={ props.onClick }
    isDisabled={ props.isDisabled }
  >
    <img src={props.icon} />
    { props.title }
  </Button>
);

LargeIconButton.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
  title: PropTypes.string,
};


export default LargeIconButton;
