import React, { Component } from 'react';
import classnames from 'classnames';
import Start from '../Button/StartButton';
import ContextMenuWrapper from '../ContextMenu/ContextMenuWrapper';

class StartMenu extends Component {
  state = {
    isOpen: this.props.options,
  }

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.setState({ isOpen: true });
  }

  handleBlur(e) {
    if(this.props.onBlur) {
      this.props.onBlur(e);
    }
    this.setState({ isOpen: false });
  }

  render() {
    const { props } = this;

    return (
      <div className="StartMenu task-bar__start">
        <Start
          onBlur={(e) => this.handleBlur(e)}
          onClick={(e) => this.handleClick(e)}
        />
        <ContextMenuWrapper
          className={classnames('StartMenu__primary', props.className)}
          options={props.options}
          isActive={this.state.isOpen}
        />
      </div>
    );
  }
}

export default StartMenu;
