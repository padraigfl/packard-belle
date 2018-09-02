import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Toggle = props => (
  <div className={classnames('Toggle', props.type)}>
    <input
      type={props.type}
      id={props.id}
      disabled={props.isDisabled}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      name={props.name}
    />
    <label htmlFor={props.id}>
      <span>
        {props.label}
      </span>
    </label>
  </div>
);

const toggleProps = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Toggle.propTypes = toggleProps;

export default Toggle;
