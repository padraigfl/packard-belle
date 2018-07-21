import React, { Component } from 'react';
import classnames from 'classnames';
import clone from 'clone';
import ContextMenu from './ContextMenu';
import '../../_scss/w98/context-menu.scss';

class ContextMenuSimple extends Component {
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.isActive!==prevState.isActive){
      return {
        options: nextProps.options,
        isActive: nextProps.isActive,
      };
    }
    else return null;
  }

  state = {
    options: this.props.options,
    isActive: this.props.isActive
  };

  updateActive(activeFields, newOptions, idx = 0) {
    if (idx === 0) {
      console.log(newOptions)
    }
    if (activeFields.length <= idx) {
      return newOptions;
    }
    const changeIdx = newOptions.findIndex((option, optIdx) => {
      if (Array.isArray(option)) {
        const subIdx = option.findIndex( opt => opt.title === activeFields[idx]);
        if ( subIdx !== -1) {
          console.log(`${optIdx}, ${subIdx}`);
          newOptions[optIdx][subIdx].isActive = true;
          if (newOptions[optIdx][subIdx].options) {
            newOptions[optIdx][subIdx].options = this.updateActive(
              activeFields,
              newOptions[optIdx][subIdx].options,
              idx + 1,
            );
          }
          return;
        }
      }
      return option.title === activeFields[idx];
    });
    if (changeIdx !== -1) {
      console.log(changeIdx);
      newOptions[changeIdx].isActive = true;
      newOptions[changeIdx].options = this.updateActive(activeFields, newOptions[changeIdx].options, idx + 1);
    }
    return newOptions;
  }

  mouseEnterItem = (e) => {
    if (e.target.value) {
      const newOptions = this.updateActive(
        e.target.value.split(','),
        clone(this.props.options),
        0,
      );
      console.log(newOptions);
      console.log(this.props.options);
      this.setState({ options: newOptions });
    }
  }

  render() {
    const { props } = this;
    return (
      <ContextMenu
        options={this.state.options}
        className={classnames(
          'context-menu__wrapper context-menu--css',
          props.className,
        )}
        mouseEnterItem={(e) => this.mouseEnterItem(e)}
      />
    );
  };
}

ContextMenuSimple.defaultProps = {
  value: [],
};

export default ContextMenuSimple;
