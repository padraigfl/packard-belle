import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './_details-section.scss';

const DetailsSection = props =>
  props.children ? (
    <section className={cx('DetailsSection window__section', props.className)}>
      <div className="DetailsSection__title">{props.title}</div>
      {props.children}
    </section>
  ) : null;

DetailsSection.propTypes = {
  title: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default DetailsSection;
