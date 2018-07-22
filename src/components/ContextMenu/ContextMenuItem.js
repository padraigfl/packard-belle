import React from 'react';
import classnames from 'classnames';
import ContextMenu from './ContextMenu';

const ContextMenuItem = props => (
  <div
    className={
      classnames(
        'context-menu__item',
        props.className,
        props.type,
        { 'context-menu__item--has-options': props.options, 'active': props.isActive },
      )
    }
    onMouseEnter={(e) => props.mouseEnterItem(e)}
    onMouseLeave={() => {}}
    onMouseOut={() => {}}
  >
    <button
      className={
        classnames(
          'context-menu__item__button',
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
      <ContextMenu
        className="context-menu__item__child"
        options={props.options}
        value={props.value}
        mouseEnterItem={props.mouseEnterItem}
      />
    )}
  </div>
);

ContextMenuItem.defaultProps = {
  onClick: () => {},
  value: [],
};

export default ContextMenuItem;
