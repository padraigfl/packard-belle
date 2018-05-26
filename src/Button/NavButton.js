import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';
import './_button';

const NavButton = props => (
    <Button
        className={ classnames('btn--nav', props.className) }
        onClick={ props.onClick }
    >
        { props.children }
    </Button>
);

NavButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    isActive: PropTypes.bool,
};


export default NavButton;