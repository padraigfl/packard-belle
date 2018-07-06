import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';
import './_button';

const ProgramButton = props => (
  <Button
    className={ classnames('btn--program', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    style={ { backgroundImage: `url(${props.icon})`, ...props.style }}
  >
   { props.children }
  </Button>
);

ProgramButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default ProgramButton;
