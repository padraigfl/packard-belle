import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import WindowFrame from './WindowFrame';
import Button from '../Button/ButtonNav';

import './styles/WindowAbstract.scss';

class WindowAbstract extends Component {
  static defaultProps = {
    title: '...',
    resizable: true,
  };

  state = {
    maximized: this.props.maximizeOnOpen,
  };

  handleMaximize = e => {
    this.setState({ maximized: true });

    if (this.props.onMaximize) {
      this.props.onMaximize(e);
    }
  };

  handleRestore = e => {
    this.setState({ maximized: false });
    if (this.props.onRestore) {
      this.props.onRestore(e);
    }
  };

  render() {
    const { props } = this;

    return (
      <WindowFrame
        className={cx('Window', props.className, {
          'Window--maximized': this.state.maximized,
          'Window--resizable': props.resizable,
          'Window--drag': props.changingState,
        })}
      >
        <div className="Window__heading">
          {props.icon && (
            <div
              className="Window__icon"
              style={{ backgroundImage: `url('${props.icon}')` }}
            />
          )}
          <div className="Window__title">{props.title}</div>
          {props.onHelp && (
            <Button className="Window__help" onClick={props.onHelp} />
          )}
          {props.onMinimize && (
            <Button className="Window__minimize" onClick={props.onMinimize} />
          )}
          {this.state.maximized && this.props.resizable && (
            <Button className="Window__restore" onClick={this.handleRestore} />
          )}
          {!this.state.maximized && this.props.resizable && (
            <Button
              className="Window__maximize"
              onClick={this.handleMaximize}
            />
          )}
          {(props.onClose ||
            props.onMaximize ||
            props.onRestore ||
            props.onMinimize ||
            props.onHelp) && (
            <Button
              className="Window__close"
              onClick={props.onClose}
              isDisabled={!props.onClose}
            />
          )}
        </div>
        {props.children}
      </WindowFrame>
    );
  }
}

export const windowProps = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.string,

  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
  maximizeOnOpen: PropTypes.bool,

  changingState: PropTypes.bool,
};

WindowAbstract.propTypes = windowProps;

export default WindowAbstract;
