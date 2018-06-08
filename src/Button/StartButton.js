import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const StartButton = props => (
  <Button
    className={ classnames('btn--start', props.className) }
    onClick={ props.onClick }
  >
    {
      props.children // start menu goes here
    }
  </Button>
);

StartButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};


export default StartButton;
