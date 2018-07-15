import React from 'react';
import PropTypes from 'prop-types';

const DetailsSection = props => (
  <section className="window__section">
    <div className="title">{ props.title }</div>
    { props.children }
  </section>
);

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default DetailsSection;
