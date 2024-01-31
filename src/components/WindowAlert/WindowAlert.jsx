import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowAbstract from '../Window/Window';
import ButtonForm from '../ButtonForm';

import './_WindowAlert.scss';

const WindowAlert = props => (
  <WindowAbstract
    className={cx('WindowAlert', props.className)}
    onClose={props.onClose}
    onHelp={props.onHelp}
    title={props.title || 'Error'}
    resizable={false}
  >
    <div
      className={cx('WindowAlert__message', { 'has-icon': props.icon })}
      style={props.icon && { backgroundImage: `url(${props.icon})` }}
    >
      {props.children}
    </div>
    <div className="WindowAlert__actions">
      {props.onOK && (
        <ButtonForm className="WindowAlert__ok" onClick={props.onOK}>
          OK
        </ButtonForm>
      )}
      {props.onCancel && (
        <ButtonForm className="WindowAlert__cancel" onClick={props.onCancel}>
          Cancel
        </ButtonForm>
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
