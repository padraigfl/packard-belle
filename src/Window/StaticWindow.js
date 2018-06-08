import React from 'react';
import PropTypes from 'prop-types';
import GenericWindow from './GenericWindow';
import Button from '../Button/NavButton';
import _close from './images/close_.png';
import _maximize from './images/maximize_.png';
import _minimize from './images/minimize_.png';

const StaticWindow = props => (
  <GenericWindow>
    <div className="window__heading">
      <div className="window__title">
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
  </GenericWindow>
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
};

export default StaticWindow;
