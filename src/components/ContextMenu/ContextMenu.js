import React from 'react';
import classnames from 'classnames';
import Window from '../Window/WindowFrame';
import ContextMenuItem from './ContextMenuItem';
import '../../_scss/w98/context-menu.scss';

const ContextMenuSimple = props => {
  if (props.children) {
    return (
      <Window
        className={
          classnames('context-menu ContextMenu ContextMenu--custom', props.className, props.direction)
        }
      >
        { props.children }
      </Window>
    )
  }
  return (
    <Window
      className={
        classnames('context-menu ContextMenu ContextMenu--css', props.className, props.direction)
      }
    >
      { props.options.map(option => {
        if (Array.isArray(option)) {
          return (
            <React.Fragment key={`menu-subset-${option[0].title}`}>
              <div className="divider divider--start"/>
              {option.map(subOption => (
                <ContextMenuItem
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
            <ContextMenuItem
              key={`context-menu-item-${option.title}`}
              {...option}
              value={[ ...props.value, option.title ]}/>
          );
        }
      })}
    </Window>
  );
};

ContextMenuSimple.defaultProps = {
  value: [],
};

export default ContextMenuSimple;
