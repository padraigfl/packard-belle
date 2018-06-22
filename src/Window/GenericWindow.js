import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './_generic-window';

const GenericWindow = props => (
  <div className={classnames('window', props.className)}>
    {props.children}
  </div>
);

GenericWindow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default GenericWindow;
