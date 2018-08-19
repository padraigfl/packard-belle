import React from 'react';
import PropTypes from 'prop-types';
import '../../_scss/w98/inputs/toggle.scss';

const Toggle = props => (
  <React.Fragment>
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
  </React.Fragment>
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
