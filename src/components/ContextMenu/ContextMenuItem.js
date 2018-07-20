import React from 'react';
import classnames from 'classnames';
import ContextMenu from './ContextMenu';

const ContextMenuItem = props => (
  <div
    className={
      classnames(
        'ContextMenuItem',
        props.className,
        props.type,
        { 'ContextMenuItem--has-options': props.options, 'ContextMenuItem--is-active active': props.isActive },
      )
    }
    onMouseEnter={(e) => props.mouseEnterItem(e)}
    onMouseLeave={() => {}}
    onMouseOut={() => {}}
  >
    <button
      className="ContextMenuItem__button"
      onClick={props.onClick}
      style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
      value={props.value}
    >
      {props.title}
    </button>
    { props.options && (
      <ContextMenu
        className="ContextMenuItem__child"
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
