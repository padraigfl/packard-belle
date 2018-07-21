import React from 'react';
import { storiesOf } from '@storybook/react';
import WindowFrame from '../src/components/Window/WindowFrame';
import AbstractWindow from '../src/components/Window/AbstractWindow';
import ExplorerWindow from '../src/components/Window/ExplorerWindow';
import MenuBar from '../src/components/MenuBar/MenuBar';
import ContextMenu from '../src/components/ContextMenu/ContextMenu';
import DetailsSection from '../src/components/Window/DetailsSection';

import img from './directory_closed.png';

const optionsSample = [
  {
    onClick: noop,
    title: 'New',
  },
  {
    onClick: noop,
    title: 'Disabled',
    disabled: true,
  },
  [
    {
      onClick: noop,
      title: 'Open',
      options: [
        {
          onClick: noop,
          title: 'open file?',
        },
        {
          onClick: noop,
          title: 'open drv file?',
        },
        {
          onClick: noop,
          title: 'spin it',
          options: [
            {
              onClick: noop,
              title: 'twist it?',
            },
            {
              onClick: noop,
              title: 'fly it',
            },
          ],
        },
      ]
    },
  ],
  {
    onClick: noop,
    title: 'quit',
  },
];


const noop = () => {};

storiesOf('Windows', module)
  .add('ContextMenuSimple', () => (
    <ContextMenu
      className="ContextMenu--css"
      options={[
        {
          onClick: noop,
          title: 'New',
        },
        [
          {
            onClick: noop,
            title: 'Open',
          },
          {
            onClick: noop,
            title: 'Two in section',
          },
        ],
        [
          {
            onClick: noop,
            title: 'Single section',
          },
        ],
        {
          onClick: noop,
          title: 'Close',
        },
    ]}
    />
  ))
  .add('ContextMenu', () => (
    <ContextMenu
      className="context-menu--css"
      options={optionsSample}
    />
  ))
  .add('Generic window', () => <WindowFrame>Window</WindowFrame>)
  .add('Static window', () => (
    <AbstractWindow
      title="Title"
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    >
      Windows
    </AbstractWindow>
  ))
  .add('Window with DetailsSection', () => (
    <AbstractWindow
      title="Settings w/Sections"
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    >
      <DetailsSection title="First Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
      <DetailsSection title="Second Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
    </AbstractWindow>
  ))
  .add('Window toolbar', () => (
    <AbstractWindow
      title="Window with MenuBar"
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    >
      <MenuBar
        options={[
          {
            title: 'File',
            options: optionsSample,
          },
          {
            title: 'Edit',
            options: optionsSample,
          }
        ]}
      />
      Windows
    </AbstractWindow>
  ))
  .add('ExplorerWindow', () => (
    <ExplorerWindow
      title="ExplorerWindow"
      menuOptions={[
        {
          title: 'File',
          options: optionsSample,
        },
        {
          title: 'Edit',
          options: optionsSample,
        }
      ]}
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    />
  ));

