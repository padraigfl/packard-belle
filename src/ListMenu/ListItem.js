import React from 'react';
import classnames from 'classnames';
import ListMenu from './ListMenu';

const ListItem = props => (
  <button
    className={
      classnames(
        'ListItem',
        props.className,
        props.type,
        { 'ListItem--has-options': props.options, 'ListItem--is-active': props.isActive },
      )
    }
    onClick={props.onClick}
    style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
  >
    { props.title }
    { props.options && (
      <ListMenu
        className="ListItem__child"
        options={props.options}
      />
    )}
  </button>
);

ListItem.defaultProps = {
  onClick: () => {},
};

export default ListItem;
