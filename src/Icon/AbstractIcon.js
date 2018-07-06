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

  setDoubleClick = () => {
    if(this.state.doubleReady) {
      this.props.onClick();
      this.disableAction();
    } else {
      this.setState({ doubleReady: true });
      setTimeout(this.disableAction, 1000);
    }
  }

  render() {
    const { props } = this;
    const Comp = props.onClick ? 'button' : 'div';
    return (
      <Comp
        onClick={ this.setDoubleClick }
        className={ classnames('icon', props.className) }
        title={ props.alt }
      >
        <div
          className="icon__icon"
          style={ { backgroundImage: `url('${props.src}')` } }
        />
        <div className="icon__text">{ props.title }</div>
        { props.children }
      </Comp>
    );
  }
}

AbstractIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default AbstractIcon;
