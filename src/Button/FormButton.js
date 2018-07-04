import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const FormButton = props => (
  <Button
    className={ classnames('btn--form', props.className) }
    onClick={ props.onClick }
    text={ props.children }
  />
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default FormButton;
