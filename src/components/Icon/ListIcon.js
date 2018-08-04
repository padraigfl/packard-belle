import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AbstractIcon from './AbstractIcon';
import '../../_scss/w98/icons/icon--list.scss';

const ListIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    onDoubleClick={ props.onDoubleClick }
    alt={ props.alt }
    className={ classnames('icon--list', props.className) }
    icon={ props.icon }
    title={ props.title }
    value={ props.value }
  />
);

ListIcon.propTypes = {
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
};

export default ListIcon;
