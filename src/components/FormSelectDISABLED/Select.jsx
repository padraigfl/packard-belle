import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import './_Select.scss';

const DefaultOptionComponent = props => <div {...props} />;

// copied straight from react select demos with slight changes
export const menuRenderer = ({
  focusedOption,
  focusOption,
  inputValue,
  instancePrefix,
  onFocus,
  onOptionRef,
  onSelect,
  optionClassName,
  optionComponent,
  options,
  removeValue,
  selectValue,
  valueArray,
  valueKey,
}) => {
  let Option = optionComponent || DefaultOptionComponent;

  return options.map((option, i) => {
    let isSelected =
      valueArray && valueArray.some(x => x[valueKey] === option[valueKey]);
    let isFocused = option === focusedOption;
    let optionClass = cx(optionClassName, {
      'Select-option': true,
      'Select-option--icon': true,
      'is-selected': isSelected,
      'is-focused': isFocused,
      'is-disabled': option.disabled,
    });

    return (
      <Option
        className={optionClass}
        focusOption={focusOption}
        inputValue={inputValue}
        instancePrefix={instancePrefix}
        isDisabled={option.disabled}
        isFocused={isFocused}
        isSelected={isSelected}
        key={`option-${i}-${option[valueKey]}`}
        onFocus={onFocus}
        onSelect={onSelect}
        option={option}
        optionIndex={i}
        ref={ref => {
          onOptionRef(ref, isFocused);
        }}
        removeValue={removeValue}
        selectValue={selectValue}
        backgroundImage={option.icon}
      >
        <span>{option.label}</span>
      </Option>
    );
  });
};

menuRenderer.propTypes = {
  focusedOption: PropTypes.object,
  inputValue: PropTypes.string,
  instancePrefix: PropTypes.string,
  optionClassName: PropTypes.string,
  options: PropTypes.array,
  valueArray: PropTypes.array,
  valueKey: PropTypes.string,
  focusOption: PropTypes.func,
  onFocus: PropTypes.func,
  onOptionRef: PropTypes.func,
  onSelect: PropTypes.func,
  optionComponent: PropTypes.func,
  optionRenderer: PropTypes.func,
  removeValue: PropTypes.func,
  selectValue: PropTypes.func,
};

const ValueRenderer = props => (
  <div
    style={{ backgroundImage: props.icon ? `url('${props.icon}')` : 'none' }}
  >
    {props.label}
  </div>
);
ValueRenderer.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

const CustomOption = ({ innerRef, innerProps }) => (
  <div ref={innerRef} {...innerProps}  className="Select-arrow-zone"/>)

class Select extends Component {
  static defaultProps = {
    placeholder: '',
    searchable: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.onChange ? null : this.props.value,
    };
  }

  handleChange = e => {
    if (this.props.onChange) {
      this.setState({ value: e.value });
    } else {
      this.props.onChange(e);
    }
  };

  // FIXME: Component needs total restyling
  render() {
    const { props } = this;
    console.log(this.state.value)
    return (
      <ReactSelect
        {...props}
        classNamePrefix={props.classNamePrefix ? props.classNamePrefix : 'w98-Select'}
        className="Select"
        placeholder={props.placeholder}
        onChange={this.handleChange}
        disabled={props.isDisabled}
        searchable={props.searchable}
        isClearable={false}
        inputMode={props.inputMode || 'none'}
        isSearchable={props.isSearchable || false}
        menuRenderer={props.useIcons ? menuRenderer : undefined}
        valueRenderer={ValueRenderer}
        menuIsOpen={!props.isDisabled}
        value={this.props.onChange ? this.props.value : this.state.value}
        styles={{
          controls: (baseStyles, state) => ({
            ...baseStyles,
          }),
          control: (baseStyles, state) => ({
            minHeight: 'initial',
            height: '20px',
            width: `100%`,  
          }),
          placeholder: (baseStyles, state) => ({
            height: '100px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
          }),
          container: (baseStyles, state) => ({
            backgroundColor: 'white',
            boxShadow: `inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c`,
          }),
          valueContainer: () => ({
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            padding: '0px 4px',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            margin: '0px 1px',
            borderRadius: 0,
            backgroundColor: 'white',
            width: `calc(100% - 2px)`
          }),
          menuList: (baseStyles, state) => ({
            ...state.options.length > 5
              ? {
                overflowY: 'auto',
                height: '100px',
              }
              : {}
          }),
          option: (baseStyles, state) => ({
            minHeight: 'initial',
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            height: '22px',
            padding: '0px 2px',
            ...state.isFocused
                ? {
                  backgroundColor: 'blue',
                  outline: `1px dotted #ffffff`,
                  outlineOffset: `-1px`,
                  color: `#ffffff`
                }
                : {},
          }),
        }}
        components={{
          DropdownIndicator: CustomOption
        }}
      />
    );
  }
}

Select.propTypes = {
  placeholder: PropTypes.any,
  isDisabled: PropTypes.bool,
  searchable: PropTypes.bool,
  useIcons: PropTypes.bool,
};

export default Select;
