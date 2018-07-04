import React from 'react';
import classnames from 'classnames';
import ListMenu from './ListMenu';

const ListItem = props => (
  <div
    className={
      classnames(
        'ListItem',
        props.className,
        props.type,
        { 'ListItem--has-options': props.options, 'ListItem--is-active': props.isActive },
      )
    }
  >
    <button
      className="ListItem__button"
      onClick={props.onClick}
      style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
    >
      <div data-text={props.title} />
    </button>
    { props.options && (
      <ListMenu
        className="ListItem__child"
        options={props.options}
      />
    )}
  </div>
);

ListItem.defaultProps = {
  onClick: () => {},
};

export default ListItem;
