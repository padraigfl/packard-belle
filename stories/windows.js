import React from 'react';
import { storiesOf } from '@storybook/react';
import GenericWindow from '../src/Window/GenericWindow';
import StaticWindow from '../src/Window/StaticWindow';
import WindowToolbar from '../src/Window/WindowToolbar';

import img from '../src/Icon/images/directory_closed.png';

const noop = () => {};

storiesOf('Windows', module)
.add('Generic window', () => <GenericWindow>Window</GenericWindow>)
.add('Static window', () => (
  <StaticWindow
    title="Title"
    icon={img}
    onClose={ noop }
    onMinimize={ noop }
    onMaximize={ noop }
  >
    Windows
  </StaticWindow>
))
.add('Window toolbar', () => (
  <StaticWindow
    title="Title"
    icon={img}
    onClose={ noop }
    onMinimize={ noop }
    onMaximize={ noop }
  >
    <WindowToolbar
      toolbarSections={[
        { name: 'File', content: 'Text' },
        { name: 'Edit', content: 'Content' },
      ]}
    />
    Windows
  </StaticWindow>
));
