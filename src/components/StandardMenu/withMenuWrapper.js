import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import clone from 'clone';
import StandardMenu, { standardMenuProps } from './StandardMenu';

const withContextLogic = ContextButton => {
  return class StandardMenuSimple extends Component {
    static defaultProps = {
      value: [],
    };
    static propTypes = {
      ...standardMenuProps,
      onClick: PropTypes.func,
      onBlur: PropTypes.func,
      onContextMenu: PropTypes.func,
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
      isActive: this.props.isActive,
    };

    updateActive(activeFields, newOptions, idx = 0) {
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

    handleEvent = onEvent => (e, newState) => {
      if (onEvent) {
        onEvent(e);
      }
      if (newState) {
        this.setState(newState);
      }
    }

    handleClick = e => this.handleEvent(this.props.onClick)(e, { isOpen: true });
    handleContextMenu = e => this.handleEvent(this.props.onContextMenu)(e, { isOpen: true });
    handleBlur = e => this.handleEvent(this.props.onBlur)(e, { isOpen: false, options: this.props.options });

    render() {
      const { options, onClick, ...props } = this.props; //eslint-disable-line

      const renderedMenu = (
        <StandardMenu
          options={this.state.options}
          className="standard-menu__wrapper"
          mouseEnterItem={(e) => this.mouseEnterItem(e)}
        />
      );

      if (ContextButton) {
        return (
          <div className={classnames('standard-menu-wrapper', props.className)}>
            <ContextButton
              {...props}
              className={classnames({ 'active': this.state.isOpen })}
              onBlur={(e) => this.handleBlur(e)}
              onClick={!this.props.onContextMenu && (e => this.handleClick(e))}
              onContextMenu={this.props.onContextMenu && (e => this.handleContextMenu(e))}
            >
              { props.children }
            </ContextButton>
            { renderedMenu }
          </div>
        );
      }
      return renderedMenu;
    }
  };
};

export default withContextLogic;
