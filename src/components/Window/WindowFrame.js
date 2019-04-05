import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles/WindowFrame.scss';

const WindowFrame = props => (
  <div className={cx('Frame', props.className)} ref={props.innerRef}>
    {props.children}
  </div>
);

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WindowFrame;
