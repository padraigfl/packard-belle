import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Window from '../Window/WindowFrame';
import StandardMenuItem from './StandardMenuItem';

import './StandardMenu.scss';

const DIVIDER = 'divider';

const flattenWithDividers = options =>
  options.reduce((acc, val, idx) => {
    if (!Array.isArray(val)) {
      acc.push(val);
    } else {
      acc = acc.concat([
        `${DIVIDER}--group-${idx}-start`,
        ...val,
        `${DIVIDER}--group-${idx}-end`,
      ]);
    }
    return acc;
  }, []);

const StandardMenu = props => {
  const options = flattenWithDividers(props.options);
  const hasOptions = Array.isArray(options);
  return (
    <Window
      className={cx('StandardMenu', props.className, props.direction, {
        'StandardMenu--visible': props.isVisible,
      })}
    >
      {hasOptions && options.length > 0 ? (
        options.map(option => {
          if (typeof option === 'string' && option.includes(DIVIDER)) {
            return (
              <div key={option.toString()} className={`${DIVIDER} ${option}`} />
            );
          }
          return (
            <StandardMenuItem
              key={`StandardMenu-item-${option.title}`}
              {...option}
              value={[...props.value, option.title]}
              closeOnClick={props.closeOnClick}
              mouseEnterItem={props.mouseEnterItem}
              StandardMenu={StandardMenu}
            />
          );
        })
      ) : (
        <StandardMenuItem
          title="(Empty)"
          className={'StandardMenuItem--empty'}
          mouseEnterItem={props.mouseEnterItem}
          closeOnClick={props.closeOnClick}
          StandardMenu={StandardMenu}
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
