import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIconLarge from '../../Button/ButtonIconLarge';
import StandardMenu from '../../StandardMenu/StandardMenu';
import './_options-list.scss';

class OptionsListDropdown extends Component {
  openList = () => {
    this.dropdownButton.focus();
  };
  render() {
    return (
      <div className="OptionsList__dropdown">
        <button
          ref={btn => {
            this.dropdownButton = btn;
          }}
          onClick={this.openList}
          className="OptionsList__dropdown__button"
        />
        <StandardMenu
          className="OptionsList__dropdown__list"
          options={this.props.options}
        />
      </div>
    );
  }
}

class OptionsList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(ButtonIconLarge.propTypes)),
    className: PropTypes.string,
  };
  state = {
    entriesInView: 8,
  };

  ref = React.createRef();

  checkWidth = () => {
    if (!this.ref.current) {
      return;
    }
    const width = this.ref.current.offsetWidth || 200;
    const entriesInView = (width - 20) / 50;
    if (this.state.entriesInView !== entriesInView) {
      this.setState({ entriesInView });
    }
  };

  render() {
    const { props, state } = this;
    return (
      <menu
        ref={this.ref}
        onMouseEnter={() => this.checkWidth()}
        className={cx(props.className, 'OptionsList')}
      >
        <div className="OptionsList__large-icons">
          {props.options.slice(0, state.entriesInView).map(option => (
            <ButtonIconLarge
              key={`large-button-${option.title}`}
              icon={option.icon}
              title={option.title}
              onClick={() => this.setState({ rand: Math.random() })}
              isDisabled={!option.onClick}
            />
          ))}
        </div>
        {props.options.slice(state.entriesInView).length > 0 && (
          <OptionsListDropdown
            options={props.options.slice(state.entriesInView)}
          />
        )}
      </menu>
    );
  }
}

export default OptionsList;
