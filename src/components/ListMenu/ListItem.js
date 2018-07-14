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
    onMouseEnter={(e) => {
      if(typeof e.target.value === 'string')
        console.log(e.target.value.split(','));
      else{
        console.log('FAILED')
        console.log(e.target)
      }
    }}
  >
    <button
      className="ListItem__button"
      onClick={props.onClick}
      style={ props.icon ? { backgroundImage: `url('${props.icon}')` } : undefined }
      value={props.value}
    >
      {props.title}
    </button>
    { props.options && (
      <ListMenu
        className="ListItem__child"
        options={props.options}
        value={props.value}
      />
    )}
  </div>
);

ListItem.defaultProps = {
  onClick: () => {},
  value: [],
};

export default ListItem;
