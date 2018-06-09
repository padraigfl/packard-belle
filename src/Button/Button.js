import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './_button';

const Button = props => (
  <button
    className={ classnames('btn', props.className) }
    onClick={ props.onClick }
    style={ props.style }
  >
    { props.children }
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.shape(), // Todo: Needs custom prop
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default Button;
