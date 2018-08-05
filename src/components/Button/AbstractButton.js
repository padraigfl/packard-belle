import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../_scss/w98/buttons/btn.scss';

class AbstractButton extends Component {
  state = {
    mouseDown: false,
  }

  handleMouse = (func, mouseDown) => {
    this.setState({ mouseDown });
    if (func) {
      func();
    }
  }

  handleClick = (e) => {
    this.button.focus();
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  handleBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.button.focus();
    if (this.props.onContextMenu) {
      this.props.onContextMenu(e);
    }
  }

  handleDoubleClick = (e) => {
    if (this.props.onDoubleClick) {
      this.props.onDoubleClick(e);
    }
  }

  render() {
    const { props } = this;

    return (
      <button
        ref={(btn) => { this.button = btn; }}
        className={ classnames(
          'btn',
          props.className,
          {
            'clicked': this.state.mouseDown,
            'btn--active': props.isActive,
            'btn--disabled': props.disabled,
          },
        )}
        onClick={ (e) => this.handleClick(e) }
        onDoubleClick={(e) => this.handleDoubleClick(e) }
        onMouseDown={() => this.handleMouse(props.onMouseDown, true)}
        onMouseUp={() => this.handleMouse(props.onMouseUp, false)}
        onBlur={(e) => this.handleBlur(e) }
        onContextMenu={
          this.props.onContextMenu && (e => this.handleContextMenu(e))
        }
        disabled={props.disabled}
        style={ props.style }
      >
        { props.children }
      </button>
    );
  }
};

AbstractButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.shape(), // Todo: Needs custom prop
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default AbstractButton;
