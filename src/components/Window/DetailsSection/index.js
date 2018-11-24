import React from 'react';
import PropTypes from 'prop-types';
import './_details-section.scss';

const DetailsSection = props => (props.children ? (
  <section className="DetailsSection window__section">
    <div className="DetailsSection__title">{ props.title }</div>
    { props.children }
  </section>
) : null);

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default DetailsSection;
