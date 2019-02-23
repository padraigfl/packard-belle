import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles/AbstractButton.scss';

class AbstractButton extends Component {
  state = {
    mouseDown: false,
  };

  handleMouse = (func, mouseDown) => {
    this.setState({ mouseDown });
    if (func) {
      func();
    }
  };

  handleClick = e => {
    this.button.focus();
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  handleBlur = e => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  handleContextMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    this.button.focus();
    if (this.props.onContextMenu) {
      this.props.onContextMenu(e);
    }
  };

  handleDoubleClick = e => {
    if (this.props.onDoubleClick) {
      this.props.onDoubleClick(e);
    }
  };

  render() {
    const { props } = this;

    return (
      <button
        ref={btn => {
          this.button = btn;
        }}
        className={cx('btn', props.className, {
          clicked: this.state.mouseDown,
          'btn--active': props.isActive,
          'btn--disabled': props.isDisabled,
        })}
        onClick={e => this.handleClick(e)}
        onDoubleClick={e => this.handleDoubleClick(e)}
        onMouseDown={() => this.handleMouse(props.onMouseDown, true)}
        onMouseUp={() => this.handleMouse(props.onMouseUp, false)}
        onBlur={e => this.handleBlur(e)}
        onContextMenu={
          this.props.onContextMenu && (e => this.handleContextMenu(e))
        }
        disabled={
          props.isDisabled ||
          (props.onClick && typeof props.onClick !== 'function')
        }
        style={props.style}
      >
        {props.children}
      </button>
    );
  }
}

export const commonButtonPropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  className: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,

  onBlur: PropTypes.func,
  onClick: PropTypes.func,
};

AbstractButton.propTypes = {
  ...commonButtonPropTypes,
  onDoubleClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  style: PropTypes.shape(), // Todo: Needs custom prop
};

export default AbstractButton;
