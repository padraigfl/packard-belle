import React from 'react';
import classnames from 'classnames';
import Window from '../Window/GenericWindow';
import ListItem from './ListItem';
import './_list-menu.scss';

const ListMenu = props => {
  if (props.children) {
    return (
      <Window
        className={
          classnames('ListMenu ListMenu--custom', props.className, props.direction)
        }
      >
        { props.children }
      </Window>
    )
  }
  return (
    <Window
      className={
        classnames('ListMenu', props.className, props.direction)
      }
    >
      { props.options.map(option => {
        if (Array.isArray(option)) {
          return (
            <React.Fragment>
              <div className="divider divider--start"/>
              {option.map(subOption => (
                <ListItem {...subOption} />
              ))}
              <div className="divider divider--end"/>
            </React.Fragment>
          )
        }
        return <ListItem {...option} />;
      })}
    </Window>
  );
};

export default ListMenu;
