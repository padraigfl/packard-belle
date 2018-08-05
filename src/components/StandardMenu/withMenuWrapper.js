import React, { Component } from 'react';
import classnames from 'classnames';
import clone from 'clone';
import StandardMenu from './StandardMenu';

const withContextLogic = ContextButton => {
  return class StandardMenuSimple extends Component {
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

    constructor(props) {
      super(props);
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
        this.setState({ options: newOptions });
      }
    }

    handleClick = (e) => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      this.setState({ isOpen: true });
    }

    handleContextMenu = (e) => {
      if (this.props.onContextMenu) {
        this.props.onContextMenu(e);
      }
      this.setState({ isOpen: true });
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
      if (ContextButton) {
        return (
          <div
            className={
              classnames('standard-menu-wrapper', props.className)
            }
          >
            <ContextButton
              {...props}
              className={classnames({ 'active': this.state.isOpen })}
              onBlur={(e) => this.handleBlur(e)}
              onClick={!this.props.onContextMenu && (e => this.handleClick(e))}
              onContextMenu={this.props.onContextMenu && (e => this.handleContextMenu(e))}
            >
              { props.children }
            </ContextButton>
            <StandardMenu
              options={this.state.options}
              className="standard-menu__wrapper"
              mouseEnterItem={(e) => this.mouseEnterItem(e)}
            />
          </div>
        );
      }
      return (
        <StandardMenu
          options={this.state.options}
          className="standard-menu__wrapper"
          mouseEnterItem={(e) => this.mouseEnterItem(e)}
        />
      );
    };
  };
}

export default withContextLogic;
