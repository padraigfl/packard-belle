import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StandardMenu from './StandardMenu';

const StandardMenuItem = props => (
  <div
    className={cx('StandardMenuItem', props.className, props.type, {
      'StandardMenuItem--has-options': props.options,
      active: props.isActive,
    })}
    onMouseEnter={props.mouseEnterItem}
    onTouchStart={props.mouseEnterItem}
  >
    <button
      className={cx('StandardMenuItem__button', { disabled: props.isDisabled })}
      onClick={
        !props.options
          ? e => {
            props.onClick(e);
            props.closeOnClick(e);
          }
          : undefined
      }
      style={
        props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined
      }
      value={props.value}
      disabled={props.isDisabled}
    >
      {props.title}
    </button>
    {props.options && (
      <StandardMenu
        className="StandardMenuItem__child"
        options={props.options}
        value={props.value}
        mouseEnterItem={props.mouseEnterItem}
        closeOnClick={props.closeOnClick}
      />
    )}
  </div>
);

StandardMenuItem.defaultProps = {
  onClick: () => {},
  closeOnClick: () => {
    // eslint-disable-next-line
    console.error('Menus require a closeOnClick prop to function correctly');
  },
  value: [],
};

StandardMenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  mouseEnterItem: PropTypes.func,
  options: PropTypes.any,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export const standardMenuItemProps = StandardMenuItem.propTypes;

export default StandardMenuItem;
