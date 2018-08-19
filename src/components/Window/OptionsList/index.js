import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LargeIconButton from '../../Button/LargeIconButton';
import StandardMenu from '../../StandardMenu/StandardMenu';
import './_options-list.scss';

class OptionsList extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(LargeIconButton.propTypes)),
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

  openList = () => {
    this.dropdownButton.focus();
  }

  render() {
    return (
      <menu
        ref={(section) => { this.section = section; }}
        className={classnames(this.props.className, 'options-list')}
      >
        {this.state.displayedIcons.map(option => (
          <LargeIconButton
            key={`large-button-${option.title}`}
            icon={option.icon}
            title={option.title}
            onClick={option.onClick}
            isDisabled={!option.onClick}
          />
        ))}
        <div
          className={classnames(
            'options-list__dropdown',
            { 'options-list__dropdown--empty': this.state.dropdown.length < 1}
          )}
        >
          <button
            ref={(btn) => { this.dropdownButton = btn; }}
            onClick={this.openList}
            className="options-list__dropdown__button"
          >
            <span>&gt;&gt;</span>
          </button>
          <StandardMenu
            className="options-list__dropdown__list"
            options={this.state.dropdown}
          />
        </div>
      </menu>
    );
  }
}

export default OptionsList;
