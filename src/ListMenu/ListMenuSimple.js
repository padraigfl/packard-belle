import React from 'react';
import classnames from 'classnames';
import Window from '../Window/WindowFrame';
import ListItem from './ListItem';
import './_list-menu.scss';

const ListMenuSimple = props => {
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
            <React.Fragment key={`menu-subset-${option[0].title}`}>
              <div className="divider divider--start"/>
              {option.map(subOption => (
                <ListItem
                  key={`menu-divider-${subOption.title}`}
                  {...subOption}
                  value={[ ...props.value, subOption.title ]}
                />
              ))}
              <div className="divider divider--end"/>
            </React.Fragment>
          )
        }
        else {
          return (
            <ListItem
              key={`menu-item-${option.title}`}
              {...option}
              value={[ ...props.value, option.title ]}/>
          );
        }
      })}
    </Window>
  );
};

ListMenuSimple.defaultProps = {
  value: [],
};

export default ListMenuSimple;
