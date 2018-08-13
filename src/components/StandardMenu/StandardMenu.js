import React from 'react';
import classnames from 'classnames';
import Window from '../Window/WindowFrame';
import StandardMenuItem from './StandardMenuItem';
import '../../_scss/w98/menu/index.scss';

const StandardMenuSimple = props => {
  return (
    <Window
      className={
        classnames(
          'standard-menu',
          props.className,
          props.direction,
          {
            'standard-menu--visible': props.visible,
          }
        )
      }
    >
      { props.options.map(option => {
        if (Array.isArray(option)) {
          return (
            <React.Fragment key={`menu-subset-${option[0].title}`}>
              <div className="divider divider--start"/>
              {option.map(subOption => (
                <StandardMenuItem
                  key={`menu-divider-${subOption.title}`}
                  {...subOption}
                  value={[ ...props.value, subOption.title ]}
                  mouseEnterItem={props.mouseEnterItem}
                />
              ))}
              <div className="divider divider--end"/>
            </React.Fragment>
          );
        }
        else {
          return (
            <StandardMenuItem
              key={`standard-menu-item-${option.title}`}
              {...option}
              value={[ ...props.value, option.title ]}
              mouseEnterItem={props.mouseEnterItem}
            />
          );
        }
      })}
    </Window>
  );
};

StandardMenuSimple.defaultProps = {
  value: [],
};

export default StandardMenuSimple;
