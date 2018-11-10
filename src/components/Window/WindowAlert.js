import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowAbstract from './WindowAbstract';
import ButtonForm from '../Button/ButtonForm';

import './styles/WindowAlert.scss';

const WindowAlert = props => (
  <WindowAbstract
    className="WindowAlert window--alert"
    onClose={props.onClose}
    onHelp={props.onHelp}
    title="Error"
  >
    <div
      className={
        cx('window--alert__message', { 'has-icon': props.icon})
      }
      style={ props.icon && { backgroundImage: `url(${props.icon})`} }
    >
      { props.children }
    </div>
    <div className="window--alert__actions">
      { props.onOK && (
        <ButtonForm
          onClick={
            () => {
              props.onOK();
            }
          }
        >OK</ButtonForm>
      )}
      { props.onCancel && (
        <ButtonForm
          onClick={
            () => {
              props.onCancel();
            }
          }
        >Cancel</ButtonForm>
      )}
    </div>
  </WindowAbstract>
);

WindowAlert.propTypes = {
  ...WindowAbstract.propTypes,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
};

export default WindowAlert;
