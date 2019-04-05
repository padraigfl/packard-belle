import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button/Button';

import './_ButtonIconLarge.scss';

const ButtonIconLarge = props => (
  <Button
    className={cx('ButtonIconLarge', props.className)}
    onClick={props.onClick}
    isDisabled={props.isDisabled}
  >
    <img src={props.icon} />
    <div className="ButtonIconLarge__text">{props.title}</div>
  </Button>
);

ButtonIconLarge.propTypes = {
  ...commonButtonPropTypes,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default ButtonIconLarge;
