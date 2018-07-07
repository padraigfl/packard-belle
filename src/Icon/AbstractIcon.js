import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './_icon';

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

  render() {
    const { props } = this;

    const iconProps = {
      onClick: () => this.checkDoubleClick(),
      className: classnames('icon', props.className),
      title: props.alt,
      value: props.value,
    };

    // Fragmented approach prevents unnecessary rerenders of Icon (which remove css pseudoclasses)
    const contents = (
      <React.Fragment>
        <div
          className="icon__icon"
          style={ { backgroundImage: `url('${props.icon}')` } }
        />
        <div className="icon__text">{ props.title }</div>
        { props.children }
      </React.Fragment>
    );

    if (this.props.onClick || this.props.onDoubleClick) {
      return (
        <button {...iconProps}>
          { contents }
        </button>
      )
    }
    return (
      <div {...iconProps}>
        { contents }
      </div>
    )
  }
}

AbstractIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
};

export default AbstractIcon;
