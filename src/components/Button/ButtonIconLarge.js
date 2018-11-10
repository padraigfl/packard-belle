import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/ButtonIconLarge.scss';

const ButtonIconLarge = props => (
  <Button
    className={ cx('ButtonIconLarge', props.className) }
    onClick={ props.onClick }
    isDisabled={ props.isDisabled }
  >
    <img src={props.icon} />
    { props.title }
  </Button>
);

ButtonIconLarge.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
  title: PropTypes.string,
};


export default ButtonIconLarge;
