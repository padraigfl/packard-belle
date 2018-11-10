import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/WindowFrame.scss';

const WindowFrame = props => (
  <div className={ cx('window', props.className, { 'window--resizable': props.resizable })}>
    {props.children}
  </div>
);

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  resizable: PropTypes.bool,
};

export default WindowFrame;
