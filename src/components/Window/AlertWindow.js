import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AbstractWindow, { windowProps } from './AbstractWindow';
import FormButton from '../Button/FormButton';

const AlertWindow = props => (
  <AbstractWindow
    className="window--alert"
    onClose={props.onClose}
    onHelp={props.onHelp}
    title="Error"
  >
    <div
      className={
        classnames('window--alert__message', { 'has-icon': props.icon})
      }
      style={ props.icon && { backgroundImage: `url(${props.icon})`} }
    >
      { props.children }
    </div>
    <div className="window--alert__actions">
      { props.onOK && (
        <FormButton
          onClick={
            () => {
              props.onOK();
            }
          }
        >OK</FormButton>
      )}
      { props.onCancel && (
        <FormButton
          onClick={
            () => {
              props.onCancel();
            }
          }
        >Cancel</FormButton>
      )}
    </div>
  </AbstractWindow>
);

AlertWindow.propTypes = {
  ...windowProps,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
};

export default AlertWindow;
