import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIconLarge from '../../Button/ButtonIconLarge';
import StandardMenu from '../../StandardMenu/StandardMenu';
import './_options-list.scss';

class OptionsListDropdown extends Component {
  openList = () => {
    this.dropdownButton.focus();
  }
  render() {
    return (
      <div className="options-list__dropdown">
        <button
          ref={(btn) => { this.dropdownButton = btn; }}
          onClick={this.openList}
          className="options-list__dropdown__button"
        />
        <StandardMenu
          className="options-list__dropdown__list"
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
  }
  state = {
    displayedIcons: [],
    dropdown: [],
  }

  componentDidMount() {
    const entriesInView = (this.section.clientWidth - 20) / 50;
    this.setState({
      displayedIcons: this.props.options.slice(0, entriesInView),
      dropdown: this.props.options.slice(entriesInView),
    });
  }

  render() {
    return (
      <menu
        ref={(section) => { this.section = section; }}
        className={ cx(this.props.className, 'options-list')}
      >
        {this.state.displayedIcons.map(option => (
          <ButtonIconLarge
            key={`large-button-${option.title}`}
            icon={option.icon}
            title={option.title}
            onClick={option.onClick}
            isDisabled={!option.onClick}
          />
        ))}
        { this.state.dropdown.length > 0 && (
          <OptionsListDropdown options={this.state.dropdown} />
        )}
      </menu>
    );
  }
}

export default OptionsList;
