import React from 'react';
import PropTypes from 'prop-types';
import './_details-section.scss';

const DetailsSection = props => (
  <div className="DetailsSection">
    <div className="DetailsSection__title">{ props.title }</div>
    { props.children }
  </div>
);

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default DetailsSection;
