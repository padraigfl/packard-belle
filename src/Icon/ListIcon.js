import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AbstractIcon from './AbstractIcon';
import './_list-icon';

const ListIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    alt={ props.alt }
    className={ classnames('list-icon', props.className) }
    src={ props.src }
    title={ props.title }
  />
);

ListIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default ListIcon;
