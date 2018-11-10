import React from 'react';
import PropTypes from 'prop-types';
import WindowFrame from './WindowFrame';
import Button from '../Button/ButtonNav';

import './styles/WindowAbstract.scss';

const WindowAbstract = props => (
  <WindowFrame className={props.className} resizable={props.resizable}>
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
        (props.onHelp) && (
          <Button className="window__help" onClick={props.onHelp} />
        )
      }
      {
        (props.onMaximize || props.onMinimize) && (
          <Button className="window__minimize" onClick={props.onMinimize} />
        )
      }
      {
        props.isMaximized && props.onRestore && (
          <Button className="window__restore" onClick={props.onRestore} />
        )
      }
      {
        !props.isMaximized && props.onMaximize && (
          <Button className="window__maximize" onClick={props.onMaximize} />
        )
      }
      {
        props.onClose && (
          <Button className="window__close" onClick={props.onClose} />
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
  resizable: PropTypes.bool,

  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
};

WindowAbstract.propTypes = windowProps;

export default WindowAbstract;
