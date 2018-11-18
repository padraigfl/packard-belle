import React from 'react';
import PropTypes from 'prop-types';

const Notifier = props => (
  <button
    className="btn Notifier TaskBar__notifications__notifier"
    title={props.title}
    onClick={props.onClick}
    style={{ backgroundImage: `url("${props.icon}")` }}
  />
);

Notifier.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Notifier.defaultProps = {
  onClick: () => {},
};

export default Notifier;
