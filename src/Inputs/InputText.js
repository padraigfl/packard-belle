// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './_input-text.scss';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

class InputText extends Component {
  static defaultProps = {
    onChange: () => {},
    onKeyDown: () => {},
    onBlur: () => {},
    onFocus: () => {},
  }

  state = {
    value: this.props.value,
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });

    this.props.onChange(e.target.value);
  }

  handleBlur = () => {
    this.props.onBlur(this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          id={this.props.id}
          name={this.props.id}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.props.onKeyDown}
          onFocus={this.props.onFocus}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

export default InputText;
