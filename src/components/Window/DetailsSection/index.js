import React from 'react';
import PropTypes from 'prop-types';
import './_details-section.scss';

const DetailsSection = props => (
  <section className="DetailsSection window__section">
    <div className="title">{ props.title }</div>
    { props.children }
  </section>
);

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default DetailsSection;
