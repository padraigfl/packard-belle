import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const FormButton = props => (
  <Button
    className={ classnames('btn--form', props.className) }
    onClick={ props.onClick }
  >
    { props.children }
  </Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default FormButton;
