import React from 'react';
import PropTypes from 'prop-types';

const Notifier = props => (
  <button
    className="btn taskbar-notifications__notifier"
    title={props.title}
    onClick={props.onClick}
    style={{ backgroundImage: `url("${props.src}")` }}
  />
);

Notifier.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Notifier.defaultProps = {
  onClick: () => {},
};

export default Notifier;
