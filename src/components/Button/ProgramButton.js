import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button, { commonButtonPropTypes } from './AbstractButton';

import '../../_scss/w98/buttons/btn--program.scss';

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
  ...commonButtonPropTypes,
  icon: PropTypes.any,
};

export default ProgramButton;
