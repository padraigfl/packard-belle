import React from 'react';
import PropTypes from 'prop-types';
import WindowFrame from './WindowFrame';
import Button from '../Button/NavButton';

const StaticWindow = props => (
  <WindowFrame className={props.className}>
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
    { props.children }
  </WindowFrame>
);

export const windowProps = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isMaximized: PropTypes.bool,
  icon: PropTypes.string,

  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
};

StaticWindow.propTypes = windowProps;

export default StaticWindow;
