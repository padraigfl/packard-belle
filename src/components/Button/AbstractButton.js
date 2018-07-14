import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../_scss/w98/button';

const AbstractButton = props => (
  <button
    className={ classnames('btn', props.className, { 'btn--is-active': props.isActive }) }
    onClick={ props.onClick }
    style={ props.style }
  >
    { props.children }
  </button>
);

AbstractButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.shape(), // Todo: Needs custom prop
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default AbstractButton;
