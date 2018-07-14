import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AbstractIcon from './AbstractIcon';

const ExplorerIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    onDoubleClick={ props.onDoubleClick }
    alt={ props.alt }
    className={ classnames('icon--explorer', props.className) }
    icon={ props.icon }
    title={ props.title }
  />
);

ExplorerIcon.propTypes = {
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default ExplorerIcon;
