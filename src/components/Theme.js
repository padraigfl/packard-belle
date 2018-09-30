import React from 'react';
import PropTypes from 'prop-types';
import '../_scss/w98/theme.scss';

const Theme = props => (
  <div className="w98" style={ props.style }>
    {props.children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape(),
};

export default Theme;
