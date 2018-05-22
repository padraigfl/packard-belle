import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './_explorer-icon';

class ExplorerIcon extends Component {
    state = {
        doubleReady: false,
    }

    disableAction = () => {
        this.setState({ doubleReady: false });
    }

    setDoubleClick = () => {
        if(this.state.doubleReady) {
            this.props.onClick();
            this.disableAction();
        } else {
            this.setState({ doubleReady: true });
            setTimeout(this.disableAction, 1000);
        }
    }
    
    render() {
        const { props } = this;
        return (
            <button
                onClick={ this.setDoubleClick }
                className={ classnames('explorer-icon', props.className) }
            >
                <img
                    src={props.src}
                    className="explorer-icon__img"
                    alt={props.alt}
                />
                <div className="explorer-icon__text">{ props.title }</div>
            </button>
        );
    }
}

ExplorerIcon.propTypes = {
    onClick: PropTypes.onClick,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

export default ExplorerIcon;
