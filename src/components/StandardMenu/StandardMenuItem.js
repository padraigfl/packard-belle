import React from 'react';
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
    onMouseLeave={() => {}}
    onMouseOut={() => {}}
  >
    <button
      className={
        classnames(
          'standard-menu__item__button',
          { disabled: props.disabled },
        )
      }
      onClick={props.onClick}
      style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
      value={props.value}
      disabled={props.disabled}
    >
      {props.title}
    </button>
    { props.options && (
      <StandardMenu
        className="standard-menu__item__child"
        options={props.options}
        value={props.value}
        mouseEnterItem={props.mouseEnterItem}
      />
    )}
  </div>
);

StandardMenuItem.defaultProps = {
  onClick: () => {},
  value: [],
};

export default StandardMenuItem;
