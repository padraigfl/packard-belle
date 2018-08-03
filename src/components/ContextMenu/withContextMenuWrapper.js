import React, { Component } from 'react';
import classnames from 'classnames';
import clone from 'clone';
import ContextMenu from './ContextMenu';
import '../../_scss/w98/context-menu.scss';

const withContextLogic = ContextButton => {
  return class ContextMenuSimple extends Component {
    static defaultProps = {
      value: [],
    };

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

    handleClick = (e) => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      this.setState({ isOpen: true });
      return false
    }

    handleBlur(e) {
      if(this.props.onBlur) {
        this.props.onBlur(e);
      }
      this.setState({
        isOpen: false,
        options: this.props.options,
      });
    }

    render() {
      const { options, onClick, ...props } = this.props;
      return (
        <div
          className={
            classnames('context-menu-wrapper', props.className)
          }
        >
          <ContextButton
            {...props}
            onBlur={(e) => this.handleBlur(e)}
            onClick={(e) => this.handleClick(e)}
          >
            { props.children }
          </ContextButton>
          <ContextMenu
            options={this.state.options}
            className="context-menu__wrapper"
            mouseEnterItem={(e) => this.mouseEnterItem(e)}
          />
        </div>
      );
    };
  };
}

export default withContextLogic;
