import React from 'react';
import PropTypes from 'prop-types';
import GenericWindow from './GenericWindow';
import Button from '../Button/NavButton';
import _close from './close_.png';
import _maximize from './maximize_.png';
import _minimize from './minimize_.png';

const StaticWindow = props => (
    <GenericWindow>
        <div>
            <div className="window__heading">
                <div className="window__title">
                    { props.title }
                </div>
                <div className="window__actions">
                    {
                        props.onHide && (
                            <Button>                        
                                <img src={_minimize} />
                            </Button>
                        )
                    }
                    {
                        props.onMinimize && (
                            <Button>                        
                                <img src={_maximize} />
                            </Button>
                        )
                    }
                    {
                        props.onClose && (
                            <Button>                        
                                <img src={_close} />
                            </Button>
                        )
                    }
                </div>
            </div>
            { props.children }
        </div>
    </GenericWindow>
);

StaticWindow.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onHide: PropTypes.func,
    className: PropTypes.string,
    isActive: PropTypes.bool,
};

export default StaticWindow;