import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../_scss/w98/button';


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
          },
        )}
        onClick={ (e) => this.handleClick(e) }
        onDoubleClick={(e) => this.handleDoubleClick(e) }
        onMouseDown={() => this.handleMouse(props.onMouseDown, true)}
        onMouseUp={() => this.handleMouse(props.onMouseUp, false)}
        onBlur={() => this.props.onBlur() }

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