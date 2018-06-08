import React from 'react';
import PropTypes from 'prop-types';
import defaultIcon from '../Icon/images/directory_closed.png';

const Notifier = props => (
  <button
    className="taskbar-notifications__notifier"
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
  src: defaultIcon,
};

export default Notifier;
