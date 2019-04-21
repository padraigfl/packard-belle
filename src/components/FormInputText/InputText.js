import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './_InputText.scss';

class InputText extends Component {
  static defaultProps = {
    onChange: () => {},
    onKeyDown: () => {},
    onBlur: () => {},
    onFocus: () => {},
  };

  state = {
    value: this.props.initialValue,
  };

  handleChange = e => {
    if (this.props.initialValue) {
      this.setState({
        value: e.target.value,
      });
    }

    this.props.onChange(e.target.value);
  };

  handleBlur = () => {
    this.props.onBlur(this.state.value);
  };

  render() {
    return (
      <input
        type="text"
        className={cx('InputText text', this.props.className)}
        value={this.props.initialValue ? this.state.value : this.props.value}
        id={this.props.id}
        disabled={this.props.isDisabled}
        name={this.props.name || this.props.id}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.props.onKeyDown}
        onFocus={this.props.onFocus}
      />
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  initialValue: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default InputText;
