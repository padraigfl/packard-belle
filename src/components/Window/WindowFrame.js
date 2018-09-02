import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './_window-frame.scss';

const WindowFrame = props => (
  <div className={classnames('window', props.className)}>
    {props.children}
  </div>
);

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WindowFrame;
