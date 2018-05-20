import React from 'react';
import PropTypes from 'prop-types';
import './_button';

const Button = props => (
    <button
        className="btn"
        onClick={ props.onClick }
    >
        { props.children }
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    isActive: PropTypes.bool,
};

// title, click, 
// onAppearSound
// canClose?
// scrollbar style

export default Button;