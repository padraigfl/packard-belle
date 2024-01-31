import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './_SelectBox.scss';

const isSelected = (selected, val) =>
  Array.isArray(selected)
    ? selected.some(selectedEntry => selectedEntry === val)
    : selected === val;

const SelectBox = props => {
  const Comp = props.component ? props.component : 'button';
  return (
    <div
      className={cx(
        'SelectBox',
        props.component
          ? `SelectBox--${props.component.name}`
          : 'SelectBox--simple',
        { disabled: props.isDisabled }
      )}
    >
      <div>
        {props.options.map(option => (
          <Comp
            key={
              typeof option.value !== 'object'
                ? option.value
                : JSON.stringify(option.value)
            }
            onClick={() => props.onClick(option.value)}
            alt={props.component ? option.alt : undefined}
            className={cx(option.className, {
              'is-active': isSelected(props.selected, option.value),
            })}
            icon={props.component ? option.icon : undefined}
            title={
              option.title ||
              (typeof option.value === 'string' ? option.value : '')
            }
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
};

SelectBox.propTypes = {
  component: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      title: PropTypes.string,
      icon: PropTypes.string,
      alt: PropTypes.string,
      className: PropTypes.string,
    })
  ),
};

export default SelectBox;
