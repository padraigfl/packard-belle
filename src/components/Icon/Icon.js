import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class AbstractIcon extends Component {
  state = {
    doubleReady: false,
  };

  disableAction = () => {
    this.setState({ doubleReady: false });
  };

  checkDoubleClick = () => {
    this.handleClick();

    if (!this.props.onDoubleClick) {
      return;
    }

    if (this.state.doubleReady) {
      this.props.onDoubleClick();
      this.disableAction();
    } else {
      this.setState({ doubleReady: true });
      setTimeout(this.disableAction, 700);
    }
  };

  handleClick = e => {
    this.icon.focus();
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  handleContextMenu = e => {
    e.preventDefault();
    this.icon.focus();
    if (this.props.onContextMenu) {
      this.props.onContextMenu(e);
    }
    //return false;
  };

  render() {
    const { props } = this;
    const Comp = props.href ? 'a' : 'button';

    const iconProps = {
      onClick: this.checkDoubleClick,
      onContextMenu: this.props.onContextMenu && this.handleContextMenu,
      onTouchEnd: this.props.onDoubleClick || this.props.onClick,
      className: cx('icon', props.className),
      title: props.alt,
      value: props.value,
      ref: icon => {
        this.icon = icon;
      },
      href: props.href,
    };

    const contents = (
      <>
        <div
          className="icon__icon"
          style={{ backgroundImage: `url('${props.icon}')` }}
        />
        <div className="icon__text">{props.title}</div>
      </>
    );

    if (this.props.onClick || this.props.onDoubleClick) {
      return (
        <Comp
          ref={icon => {
            this.icon = icon;
          }}
          target={props.external && Comp === 'a' && '_blank'}
          rel={props.external && Comp === 'a' && 'noopener noreferrer'}
          {...iconProps}
        >
          {contents}
        </Comp>
      );
    }
    return <div {...iconProps}>{contents}</div>;
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
  href: PropTypes.string,
  external: PropTypes.bool,
};

AbstractIcon.propTypes = iconProps;

export default AbstractIcon;
