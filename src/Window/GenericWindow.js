import React from 'react';
import PropTypes from 'prop-types';
import './_generic-window';

const GenericWindow = props => (
    <div className="window">
        {props.children}
    </div>
);

GenericWindow.propTypes = {
    children: PropTypes.node,
};

export default GenericWindow;