import React from 'react';
import classnames from 'classnames';
import ListIcon from '../Icon/ListIcon';
import './_select.scss';

const isSelected = (selected, val) => selected.some(selectedEntry => selectedEntry === val);

const Select = (props) => {
  const Comp = props.hasIcons ? ListIcon : 'button';
  return (
    <div className={classnames('SelectBox')}>
      <div>
        { props.options.map(option => (
          <Comp
            key={option.value}
            onClick={() => props.onClick(option.value)}
            alt={props.hasIcons ? option.alt : undefined}
            className={
              classnames(option.className, { 'is-active': isSelected(props.selected, option.value) })
            }
            icon={props.hasIcons ? option.icon : undefined}
            title={option.title || (typeof option.value === 'string' ? option.value : '')}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Select;
