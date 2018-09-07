import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/SelectMultipleSimple.scss';

class SelectMultipleSimple extends Component {
  static defaultProps = {
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.multiple ? [ ] : (this.props.value || '') ,
    };
  }

  updateValue = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  handleChange = (event) => {
    if (this.props.multiple) {
      const selectedIndex = this.state.value.findIndex(val => val === event.target.value);
      const isSelected = selectedIndex !== -1;
      if (!isSelected && this.props.selectMultiple) {
        this.updateValue([...this.state.value, event.target.value]);
        return;
      }
      if (!isSelected) {
        this.updateValue([event.target.value]);
        return;
      }
      if (isSelected) {
        this.updateValue([
          ...this.state.value.slice(0, selectedIndex),
          ...this.state.value.slice(selectedIndex + 1),
        ]);
        return;
      }
    } else {
      this.updateValue(event.target.value);
    }
  }

  render() {
    const { props } = this;
    return (
      <div className="SelectMultipleSimple">
        <select value={this.state.value} onChange={this.handleChange} disabled={this.props.isDisabled} multiple>
          { props.options.map(option => (
            <option
              key={option.value.toString()}
              value={option.value}
              disabled={option.isDisabled}
            >
              <div>{option.title || (typeof option.value === 'string' ? option.value : '')}</div>
            </option>
          ))}
        </select>
      </div>
    );
  }
}

SelectMultipleSimple.propTypes = {
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
    isDisabled: PropTypes.bool,
  })),
};

export default SelectMultipleSimple;
