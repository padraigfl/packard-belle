import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';

const StartButton = props => (
  <Button
    className={ classnames('btn--start', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
  />
);

StartButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};


export default StartButton;
