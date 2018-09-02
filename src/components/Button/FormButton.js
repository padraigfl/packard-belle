import React from 'react';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import './styles/FormButton.scss';

const FormButton = props => (
  <Button
    className={ classnames('FormButton', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    isDisabled={props.isDisabled}
  >
    { props.children }
  </Button>
);

Button.propTypes = {
  ...commonButtonPropTypes,
};

export default FormButton;
