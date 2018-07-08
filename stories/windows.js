import React from 'react';
import { storiesOf } from '@storybook/react';
import GenericWindow from '../src/Window/GenericWindow';
import StaticWindow from '../src/Window/StaticWindow';
import MenuBar from '../src/MenuBar/MenuBar';
import ListMenu from '../src/ListMenu/ListMenu';
import ListMenuSimple from '../src/ListMenu/ListMenuSimple';
import DetailsSection from '../src/Window/DetailsSection';

import img from '../src/Icon/images/directory_closed.png';

const optionsSample = [
  {
    onClick: noop,
    title: 'New',
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
  .add('ListMenuSimple', () => (
    <ListMenuSimple
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
  .add('ListMenu', () => (
    <ListMenu
      options={optionsSample}
    />
  ))
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
  .add('Window with DetailsSection', () => (
    <StaticWindow
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
    </StaticWindow>
  ))
  .add('Window toolbar', () => (
    <StaticWindow
      title="Window with MenuBar"
      icon={img}
      onClose={ noop }
      onMinimize={ noop }
      onMaximize={ noop }
    >
      <MenuBar
        toolbarSections={[
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
    </StaticWindow>
  ));
