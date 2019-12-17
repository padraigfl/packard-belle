import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import clone from 'clone';
import StandardMenu, { standardMenuProps } from '../StandardMenu';

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

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isActive !== prevState.isActive) {
        return {
          options: nextProps.options,
          isActive: nextProps.isActive,
        };
      } else return null;
    }

    state = {
      options: this.props.options,
      isActive: this.props.isActive,
      isOpen: false,
    };

    updateActive(activeFields, newOptions, idx = 0) {
      if (activeFields.length <= idx) {
        return newOptions;
      }
      const changeIdx = newOptions.findIndex((option, optIdx) => {
        if (Array.isArray(option)) {
          const subIdx = option.findIndex(
            opt => opt.title === activeFields[idx]
          );
          if (subIdx !== -1) {
            newOptions[optIdx][subIdx].isActive = true;
            if (newOptions[optIdx][subIdx].options) {
              newOptions[optIdx][subIdx].options = this.updateActive(
                activeFields,
                newOptions[optIdx][subIdx].options,
                idx + 1
              );
            }
            return;
          }
        }
        return option.title === activeFields[idx];
      });
      if (changeIdx !== -1) {
        newOptions[changeIdx].isActive = true;
        newOptions[changeIdx].options = this.updateActive(
          activeFields,
          newOptions[changeIdx].options,
          idx + 1
        );
      }
      return newOptions;
    }

    mouseEnterItem = e => {
      if (e.target.value) {
        const newOptions = this.updateActive(
          e.target.value.split(','),
          clone(this.props.options),
          0
        );
        this.setState({ options: newOptions });
      }
    };
    addBlurListener = () => {
      document.body.addEventListener('click', this.handleBlur);
      document.body.addEventListener('mousedown', this.handleBlur);
      document.body.addEventListener('touchstart', this.handleBlur);
    };
    removeBlurListener = () => {
      document.body.removeEventListener('click', this.handleBlur);
      document.body.removeEventListener('mousedown', this.handleBlur);
      document.body.removeEventListener('touchstart', this.handleBlur);
    };

    buttonClick = () => {
      if (this.state.isOpen) {
        this.removeBlurListener();
        this.setState({ isOpen: false, options: this.props.options });
      } else {
        this.setState(
          { isOpen: true, options: this.props.options },
          this.addBlurListener,
        );
      }
    };
    handleEvent = newState => onEvent => e => {
      if (onEvent) {
        onEvent(e);
      }
      if (newState) {
        this.setState(newState);
      }
    };
    handleContextMenu = e =>
      this.handleEvent({ isOpen: true })(this.props.onContextMenu)(e);
    handleBlur = e => {
      if (this.el && !this.el.contains(e.target)) {
        this.handleEvent({ isOpen: false, options: this.props.options })(
          this.props.onBlur
        )(e);
      }
    };
    handleSelectionClose = this.handleEvent({
      isOpen: false,
      options: this.props.options,
    });

    render() {
      const renderedMenu = (
        <StandardMenu
          options={this.state.options}
          className="renderedMenu"
          mouseEnterItem={e => this.mouseEnterItem(e)}
          closeOnClick={this.handleSelectionClose}
        />
      );

      if (ContextButton) {
        const { className, ...props } = this.props;
        return (
          <div
            ref={el => {
              this.el = el;
            }}
            className={cx('StandardMenuWrapper', className, {
              active: this.state.isOpen,
            })}
          >
            <ContextButton
              {...props}
              onMouseUp={this.buttonClick}
              onTouchStart={this.buttonClick}
              className={this.state.isOpen ? 'active' : ''}
              onContextMenu={
                this.props.onContextMenu && (e => this.handleContextMenu(e))
              }
            >
              {props.children}
            </ContextButton>
            {renderedMenu}
          </div>
        );
      }
      return renderedMenu;
    }
  };
};

export default withContextLogic;
