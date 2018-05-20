import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button/Button';
import GenericWindow from '../src/Window/GenericWindow';
import StaticWindow from '../src/Window/StaticWindow';

const noop = () => {};

storiesOf('Button', module)
  .add('button', () => <Button>Button</Button>);

storiesOf('Windows', module)
  .add('Generic window', () => <GenericWindow>Window</GenericWindow>)
  .add('Static window', () => (
    <StaticWindow
      title="Title"
      onClose={ noop }
      onMinimize={ noop }
      onHide={ noop }
    >
      Windows
    </StaticWindow>
  ));