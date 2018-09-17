import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Window from '../Window/WindowFrame';
import StandardMenuItem from './StandardMenuItem';

import './StandardMenu.scss';

const DIVIDER = 'divider';


const flattenWithDividers = (options) => options.reduce((acc, val) => {
  if (!Array.isArray(val)) {
    acc.push(val);
  } else {
    acc = acc.concat([`${DIVIDER}--start`, ...val, `${DIVIDER}--end`]);
  }
  return acc;
}, []);

const StandardMenu = props => {
  const options = flattenWithDividers(props.options);
  const hasOptions = Array.isArray(options);
  return (
    <Window
      className={classnames(
        'StandardMenu', props.className, props.direction,
        { 'StandardMenu--visible': props.isVisible },
      )}
    >
      { hasOptions && options.length > 0 ? (
        options.map(option => {
          if (typeof option === 'string' && option.includes(DIVIDER)) {
            return <div className={`${DIVIDER} ${option}`} />;
          }
          return (
            <StandardMenuItem
              key={`StandardMenu-item-${option.title}`}
              {...option}
              value={[ ...props.value, option.title ]}
              mouseEnterItem={props.mouseEnterItem}
            />
          );
        })) : (
        <StandardMenuItem
          title="(Empty)"
          className={'StandardMenuItem--empty'}
          mouseEnterItem={props.mouseEnterItem}
          isDisabled
        />
      )}
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
