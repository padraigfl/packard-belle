import React, { Component } from 'react';
import Checkbox from '../../src/components/FormCheckbox';
import Radio from '../../src/components/FormRadio';
import InputText from '../../src/components/FormInputText';
import FakeSelect from '../../src/components/FormFakeSelect';
import SelectMultiple from '../../src/components/FormSelectBoxSimple';
import Select from '../../src/components/FormSelect';
import SelectBox from '../../src/components/FormSelectBox';
import ListIcon from '../../src/components/IconListIcon';
import ExplorerIcon from '../../src/components/IconExplorerIcon';

import img from './directory_closed.png';

const noop = () => {};
let selectValue = 'option1';

class RadioTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'option1',
    };
  }
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { props } = this;
    return (
      <div className="form">
        {props.options.map(option => (
          <div key={`${option.value}`}>
            <Radio
              name={props.name}
              type={props.type}
              onChange={this.onChange}
              checked={this.state.value === option.value}
              {...option}
            />
          </div>
        ))}
      </div>
    );
  }
}

class CheckboxTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Checked',
    };
  }
  onChange = e => {
    const value = e.target.value;
    this.setState({ value: value !== this.state.value ? value : null });
  };
  render() {
    const { props } = this;
    return (
      <Checkbox
        className="form"
        key={`${props.value}`}
        name={props.name}
        type={props.type}
        onChange={this.onChange}
        checked={this.state.value === props.value}
        {...props}
      />
    );
  }
}

class SelectBoxState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  handleChange(val) {
    if (!this.props.multiple) {
      this.setState({ selected: val });
      return;
    }

    if (this.state.selected.some(selectedEntry => selectedEntry === val)) {
      this.setState({
        selected: this.state.selected.filter(
          selectedEntry => selectedEntry !== val
        ),
      });
      return;
    }

    this.setState({
      selected: [...this.state.selected, val],
    });
  }

  render() {
    return (
      <div className="form">
        <SelectBox
          onClick={val => this.handleChange(val)}
          options={[
            {
              title: 'Testing6 test',
              icon: img,
              value: 'TestValue1',
              alt: 'test',
            },
            {
              title: 'Testing7 Testing Test another test ohhhh right',
              icon: img,
              value: 'TestValue2',
              alt: 'test',
            },
            {
              title: 'Testing8',
              icon: img,
              value: 'TestValue3',
              alt: 'test',
            },
            {
              title: 'Testing9 Test Test',
              value: 'TestValue4',
              alt: 'test',
            },
            {
              title: 'Testing0',
              icon: img,
              value: 'TestValue5',
              alt: 'test',
            },
          ]}
          selected={this.state.selected}
          component={this.props.component}
          isDisabled={this.props.isDisabled}
        />
      </div>
    );
  }
}

export const checkbox = {
  render: () => (
    <div className="form">
      <CheckboxTest type="checkbox" label="Checked" id="ID" value="Checked" />
      <br />
      <CheckboxTest type="checkbox" label="Label" id="ID2" value="checkit" />
      <br />
      <CheckboxTest
        type="checkbox"
        label="Disabled"
        id="ID2s"
        value="checkit"
        isDisabled
      />
      <br />
      <CheckboxTest
        type="checkbox"
        label="Checked and disabled"
        id="ID2s"
        value="Checked"
        isDisabled
      />
    </div>
  )
}
export const radio = { render: () => (
    <div className="form">
      <p>Sample Radio</p>
      <RadioTest
        name="radio"
        value="option1"
        options={[
          {
            label: 'Option 1',
            id: 'option1',
            value: 'option1',
            type: 'radio',
          },
          {
            label: 'Option 2',
            id: 'option2',
            value: 'option2',
            type: 'radio',
          },
          {
            label: 'Option 3 (Disabled)',
            id: 'option3',
            value: 'option3',
            type: 'radio',
            isDisabled: true,
          },
        ]}
      />

      <p>Additional states</p>
      <RadioTest
        name="radio2"
        value="option1"
        options={[
          {
            label: 'Disabled and selected',
            id: 'option5',
            value: 'option1',
            type: 'radio',
            isDisabled: true,
          },
        ]}
      />
    </div>
  )
}
export const text = { render: () => (
    <div className="form">
      <InputText />: Active
      <br />
      <InputText value="default value" />: initial value
      <br />
      <InputText isDisabled />: Disabled
    </div>
  )
}
export const SelectMultipleBasic = { render: () => (
    <div className="form">
      <SelectMultiple
        options={[
          {
            name: 'option1',
            value: 'option1',
          },
          {
            name: 'option2',
            value: 'option2',
          },
          {
            name: 'option3',
            value: 'option3',
          },
        ]}
        multiple
      />
      <p>
        This implementation only works on chrome and uses the DOM Select
        multiple field
      </p>
    </div>
  )
}
export const select = {
  render: () => (
      <div className="form">
        Active select box
        <Select
          options={[
            {
              label: 'option1',
              value: 'option1',
            },
            {
              label: 'option2',
              value: 'option2',
            },
            {
              label: 'option3',
              value: 'option3',
            },
            {
              label: 'Option4',
              value: 'option4',
            },
          ]}
          onChange={value => {
            selectValue = value;
          }}
          value={selectValue}
          useIcons
        />
        <br />
        <br />
        Disabled select box
        <Select
          options={[
            {
              label: 'option1',
              value: 'option1',
            },
            {
              label: 'option2',
              value: 'option2',
            },
            {
              label: 'option3',
              value: 'option3',
            },
            {
              label: 'Option4',
              value: 'option4',
            },
          ]}
          value="option1"
          useIcons
          isDisabled
        />
      </div>
    ),
  notes: `*Note*
    These select boxes use [https://github.com/JedWatson/react-select](React-Select) v1.2;
    writing, styling and debugger a framework agnostic select field seemed like a lot more work than everything else here combined
    A total rewrite will be required to update.
    Current storybook example is not fully operational.`,
}
export const SelectboxSimple = {
  render: () => (
    <div className="form">
      <SelectBoxState multiple />
      <br />
      Disabled
      <SelectBoxState multiple isDisabled />
    </div>
  )
}
export const SelectBoxWithIcons = {
  render: () => (
    <div className="form">
      <SelectBoxState multiple component={ListIcon} />
      <br />
      Disabled
      <SelectBoxState multiple isDisabled component={ListIcon} />
    </div>
  )
}
export const SelectBoxWithOtherIcon = {
  render: () => (
    <div className="form">
      <SelectBoxState multiple component={ExplorerIcon} />
    </div>
  )
}
export const FakeSelectDropdown = {
  render: () => (
    <div className="form">
      <FakeSelect title="test" icon={img} />
    </div>
  )
};


const meta = {
  component: checkbox,
}
export default meta;