import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './_AbstractButton.scss';

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
    const {
      className,
      isActive,
      isDisabled,
      onMouseDown,
      onMouseUp,
      onContextMenu,
      style,
      title,
      children,
      ...otherProps
    } = this.props;

    return (
      <button
        {...otherProps}
        ref={btn => {
          this.button = btn;
        }}
        className={cx('btn', className, {
          clicked: this.state.mouseDown,
          'btn--active': isActive,
          'btn--disabled': isDisabled,
        })}
        onClick={e => this.handleClick(e)}
        onDoubleClick={e => this.handleDoubleClick(e)}
        onMouseDown={() => this.handleMouse(onMouseDown, true)}
        onMouseUp={() => this.handleMouse(onMouseUp, false)}
        onBlur={e => this.handleBlur(e)}
        onContextMenu={
          onContextMenu && (e => this.handleContextMenu(e))
        }
        disabled={isDisabled}
        style={style}
        title={title}
      >
        {children}
      </button>
    );
  }
}

export const commonButtonPropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  title: PropTypes.string,
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
