import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import '../_scss/w98/theme.scss';

const Theme = props => (
  <div className={cx('w98', props.className)} style={ props.style }>
    {props.children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

export default Theme;
