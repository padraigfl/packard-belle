import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import WindowFrame from './WindowFrame';
import Button from '../Button/ButtonNav';

import './styles/WindowAbstract.scss';

class WindowAbstract extends Component {
  state = {
    maximized: this.props.maximized,
  }

  handleMaximize = (e) => {
    this.setState({ maximized: true });
    if (this.props.onMaximize) {
      this.props.onMaximize(e);
    }
  };

  handleRestore = (e) => {
    this.setState({ maximized: false });
    if (this.props.onRestore) {
      this.props.onRestore(e);
    }
  };

  render() {
    const { props } = this;

    return (
      <WindowFrame
        className={cx('Window', props.className, { 'Window--maximized': this.state.maximized })}
        resizable={props.resizable}
      >
        <div className="Window__heading">
          { props.icon && (
            <div
              className="Window__icon"
              style={ { backgroundImage: `url('${props.icon}')` } }
            />
          )}
          <div
            className="Window__title"
          >
            { props.title }
          </div>
          {
            props.onHelp && (
              <Button className="Window__help" onClick={props.onHelp} />
            )
          }
          {
            props.onMinimize && (
              <Button className="Window__minimize" onClick={props.onMinimize} />
            )
          }
          {
            this.state.maximized && props.resizable && (
              <Button className="Window__restore" onClick={this.handleRestore} />
            )
          }
          {
            !this.state.maximized && props.resizable && (
              <Button className="Window__maximize" onClick={this.handleMaximize} />
            )
          }
          {
            props.onClose && (
              <Button className="Window__close" onClick={props.onClose} />
            )
          }
        </div>
        { props.children }
      </WindowFrame>
    );
  }
}

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
