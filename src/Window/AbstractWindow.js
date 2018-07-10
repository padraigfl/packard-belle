import React from 'react';
import PropTypes from 'prop-types';
import WindowFrame from './WindowFrame';
import Button from '../Button/NavButton';

const StaticWindow = props => (
  <WindowFrame>
    <div className="window__heading">
      { props.icon && (
        <div
          className="window__icon"
          style={ { backgroundImage: `url('${props.icon}')` } }
        />
      )}
      <div
        className="window__title"
      >
        { props.title }
      </div>
      <div className="window__actions">
        {
          props.onMinimize && (
            <Button  className="window__minimize" />
          )
        }
        {
          props.isMaximized && props.onRestore && (
            <Button  className="window__restore" />
          )
        }
        {
          !props.isMaximized && props.onMaximize && (
            <Button className="window__maximize" />
          )
        }
        {
          props.onClose && (
            <Button className="window__close" />
          )
        }
      </div>
    </div>
    { props.children }
  </WindowFrame>
);

StaticWindow.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onRestore: PropTypes.func,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isMaximized: PropTypes.bool,
    icon: PropTypes.string,
};

export default StaticWindow;
