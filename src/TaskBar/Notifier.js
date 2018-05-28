import React from 'react';
import PropTypes from 'prop-types';

const Notifier = props => (
    <button
        class="taskbar-notifications__notifier"
        title={props.title}
    >
    x
    </button>
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
