import React from 'react';
import classnames from 'classnames';
import './_select.scss';

const isSelected = (selected, val) => selected.some(selectedEntry => selectedEntry === val);

const Select = (props) => {
  const Comp = props.component ? props.component : 'button';
  return (
    <div className={classnames('SelectBox', props.component ? `SelectBox--${props.component.name}` : 'SelectBox--simple',)}>
      <div>
        { props.options.map(option => (
          <Comp
            key={option.value}
            onClick={() => props.onClick(option.value)}
            alt={props.component ? option.alt : undefined}
            className={
              classnames(
                option.className,
                { 'is-active': isSelected(props.selected, option.value) }
              )
            }
            icon={props.component ? option.icon : undefined}
            title={option.title || (typeof option.value === 'string' ? option.value : '')}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Select;
