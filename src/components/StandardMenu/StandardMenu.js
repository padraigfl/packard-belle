import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Window from '../Window/WindowFrame';
import StandardMenuItem from './StandardMenuItem';

import './StandardMenu.scss';

const StandardMenu = props => {
  return (
    <Window
      className={
        classnames(
          'StandardMenu',
          props.className,
          props.direction,
          {
            'StandardMenu--visible': props.isVisible,
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
              key={`StandardMenu-item-${option.title}`}
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

StandardMenu.defaultProps = {
  value: [],
};

export const standardMenuProps = {
  value: PropTypes.arrayOf(PropTypes.string),
  mouseEnterItem: PropTypes.func,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  options: PropTypes.any,
  isVisible: PropTypes.bool,
};

StandardMenu.propTypes = standardMenuProps;

export default StandardMenu;
