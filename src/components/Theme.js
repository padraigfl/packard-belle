import React from 'react';
import PropTypes from 'prop-types';
import '../_scss/w98/_theme.scss';

const Theme = props => (
  <div className="w98">
    {props.children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
