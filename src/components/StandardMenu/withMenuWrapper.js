import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import clone from 'clone';
import StandardMenu, { standardMenuProps } from './StandardMenu';
import './withMenuWrapper.scss';

const withContextLogic = (ContextButton, rightClick = false) => {
  return class StandardMenuSimple extends Component {
    static defaultProps = {
      value: [],
      options: [],
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
      isOpen: false,
      posX: 0,
      posY: 0,
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

    buttonClick = (e) => {
      let changes = {
        options: this.props.options,
      };
      if (e.button === 2) {
        changes.posX = e.pageX;
        changes.posY = e.pageY;
      }
      if (this.state.isOpen) {
        document.body.removeEventListener('click', this.handleBlur);
      } else {
        document.body.addEventListener('click', this.handleBlur);
      }
      this.setState({ ...changes, isOpen: !this.state.isOpen });
      return false;
    }
    rightButtonClick = (e) => {
      let changes = {
        options: this.props.options,
        posX: e.pageX,
        posY: e.pageY,
      };
      const menuEl = this.el.getElementsByClassName('standard-menu__wrapper')[0];
      if (this.state.isOpen) {
        document.body.removeEventListener('click', (e) => this.handleBlur(e, menuEl));
      } else {
        document.body.addEventListener('click', (e) => this.handleBlur(e, menuEl));
      }
      this.setState({ ...changes, isOpen: !this.state.isOpen });
      return false;
    }
    handleEvent = newState => onEvent => e => {
      if (onEvent) { onEvent(e); }
      if (newState) { this.setState(newState); }
    }
    handleBlur = (e, el = this.el) => {
      if (el && !el.contains(e.target)) {
        this.handleEvent({ isOpen: false, options: this.props.options })(this.props.onBlur)(e);
      }
    }
    handleSelectionClose = this.handleEvent({ isOpen: false, options: this.props.options });

    render() {
      const renderedMenu = (
        <StandardMenu
          options={this.state.options}
          className="standard-menu__wrapper"
          mouseEnterItem={(e) => this.mouseEnterItem(e)}
          closeOnClick={this.handleSelectionClose}
          coordinates={rightClick && {
            posX: this.state.posX,
            posY: this.state.posY,
          }}
        />
      );

      if (ContextButton) {
        const { className, ...props} = this.props;
        return (
          <div
            ref={(el) => { this.el = el; }}
            className={classnames(
              'standard-menu-wrapper',
              className,
              { 'active': this.state.isOpen }
            )}
          >
            <ContextButton
              {...props}
              onClick={!rightClick ? this.buttonClick : this.props.onClick}
              className={this.state.isOpen ? 'active' : ''}
              onContextMenu={rightClick ? this.rightButtonClick : this.props.onContextMenu}
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
