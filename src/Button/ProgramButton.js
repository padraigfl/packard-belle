import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const ProgramButton = props => (
  <Button
    className={ classnames('btn--program', props.className, { 'btn--is-active': props.isActive }) }
    onClick={ props.onClick }
  >
    <div
      className="btn--program__text"
      style={ { backgroundImage: `url(${props.icon})`}}
    >
      {props.title}
    </div>
  </Button>
);

ProgramButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default ProgramButton;
