import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StandardMenu from './StandardMenu';

const StandardMenuItem = props => {
  const Comp = props.href ? 'a' : 'button';
  return (
    <div
      className={cx('StandardMenuItem', props.className, props.type, {
        'StandardMenuItem--has-options': props.options,
        active: props.isActive,
      })}
      onMouseEnter={props.mouseEnterItem}
      onTouchStart={props.mouseEnterItem}
    >
      <Comp
        className={cx('StandardMenuItem__button', { disabled: props.isDisabled })}
        onClick={
          !props.options && !props.isDisabled
            ? props.closeOnClick(props.onClick)
            : undefined
        }
        style={
          props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined
        }
        value={props.value}
      >
        {props.title}
      </Comp>
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
}

StandardMenuItem.defaultProps = {
  onClick: () => {},
  closeOnClick: () => {
    console.error('Menus require a closeOnClick prop to function correctly'); // eslint-disable-line
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
