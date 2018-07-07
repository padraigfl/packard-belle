import React from 'react';
import classnames from 'classnames';
import ListMenuSimple from './ListMenuSimple';
import './_list-menu.scss';

const ListMenu = props => {
  const classes = classnames('ListMenu--css', props.className)
  if (props.children) {
    return (
      <ListMenuSimple
        className={classes}
        value={props.value}
      >
        {props.children}
      </ListMenuSimple>
    );
  }
  return (
    <ListMenuSimple
      className={classes}
      options={props.options}
      value={props.value}
    />
  );
};

ListMenu.defaultProps = {
  value: [],
};

export default ListMenu;
