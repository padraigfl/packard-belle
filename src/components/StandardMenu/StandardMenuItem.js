import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StandardMenu from './StandardMenu';

const StandardMenuItem = props => (
  <div
    className={
      classnames(
        'standard-menu__item',
        props.className,
        props.type,
        { 'standard-menu__item--has-options': props.options, 'active': props.isActive },
      )
    }
    onMouseEnter={props.mouseEnterItem}
  >
    <button
      className={
        classnames(
          'StandardMenuItem__button',
          'standard-menu__item__button',
          { disabled: props.isDisabled },
        )
      }
      onClick={props.closeOnClick(props.onClick)}
      style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
      value={props.value}
      disabled={props.isDisabled}
    >
      {props.title}
    </button>
    { props.options && (
      <StandardMenu
        className="standard-menu__item__child"
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
