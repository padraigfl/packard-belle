import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../_scss/w98/icons/icon.scss';

class AbstractIcon extends Component {
  state = {
    doubleReady: false,
  }

  disableAction = () => {
    this.setState({ doubleReady: false });
  }

  checkDoubleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }

    if (!this.props.onDoubleClick) {
      return;
    }

    if(this.state.doubleReady) {
      this.props.onDoubleClick();
      this.disableAction();
    } else {
      this.setState({ doubleReady: true });
      setTimeout(this.disableAction, 700);
    }
  }

  handleClick = () => {
    this.icon.focus();
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  handleContextMenu = (e) => {
    e.preventDefault();
    this.icon.focus();
    if (this.props.onContextMenu) {
      this.props.onContextMenu(e);
    }
    return false;
  }

  render() {
    const { props } = this;

    const iconProps = {
      onDoubleClick: props.onDoubleClick,
      onClick: this.handleClick,
      onContextMenu: this.props.onContextMenu && this.handleContextMenu,
      className: classnames('icon', props.className),
      title: props.alt,
      value: props.value,
      ref: (icon) => { this.icon = icon; },
    };

    const contents = (
      <React.Fragment>
        <div
          className="icon__icon"
          style={ { backgroundImage: `url('${props.icon}')` } }
        />
        <div className="icon__text">{ props.title }</div>
      </React.Fragment>
    );

    if (this.props.onClick || this.props.onDoubleClick ) {
      return (
        <button
          ref={(icon) => { this.icon = icon; }}
          {...iconProps}
        >
          { contents }
        </button>
      );
    }
    return (
      <div {...iconProps}>
        { contents }
      </div>
    );
  }
}

export const iconProps = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onContextMenu: PropTypes.func,
};

AbstractIcon.propTypes = iconProps;

export default AbstractIcon;
