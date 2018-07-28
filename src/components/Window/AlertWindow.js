import React from 'react';
import classnames from 'classnames';
import AbstractWindow from './AbstractWindow';
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

export default AlertWindow;
