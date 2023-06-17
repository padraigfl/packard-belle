import React from 'react';
import WindowFrame from '../../src/components/Frame';
import AbstractWindow from '../../src/components/Window';
import ExplorerWindow from '../../src/components/WindowExplorer';
import AlertWindow from '../../src/components/WindowAlert';
import WindowProgram from '../../src/components/WindowProgram';
import DetailsSection from '../../src/components/DetailsSection';

import img from './directory_closed.png';
import WindowAction from '../../src/components/WindowAction';

const noop = () => {};

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
      ],
    },
  ],
  {
    onClick: noop,
    title: 'quit',
  },
];

export const GenericWindow = () => <WindowFrame>Window</WindowFrame>
export const StaticWindow = () => <AbstractWindow
      title="Title"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
    >
      Windows
    </AbstractWindow>
export const WindowWithDetailsSection = () => (
    <AbstractWindow
      title="Settings w/Sections"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
    >
      <DetailsSection title="First Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
      <DetailsSection title="Second Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
    </AbstractWindow>
  )
export const WindowForProgram = () => (
    <WindowProgram
      title="Window with MenuBar"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
      menuOptions={[
        {
          title: 'File',
          options: optionsSample,
        },
        {
          title: 'Edit',
          options: optionsSample,
        },
      ]}
      resizable
    >
      Windows
    </WindowProgram>
  )
export const ExplorerWindowStory = {
  render: () => (
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
          },
        ]}
        icon={img}
        onClose={noop}
        onMinimize={noop}
        onMaximize={noop}
        onRestore={noop}
        explorerOptions={[
          {
            icon: img,
            title: 'Back',
            onClick: noop,
          },
          {
            icon: img,
            title: 'Forward',
            onClick: noop,
          },
          [
            {
              icon: img,
              title: 'Forward',
              onClick: noop,
            },
            {
              icon: img,
              title: 'Forward',
              onClick: noop,
            },
          ],
          {
            icon: img,
            title: 'View',
          },
          {
            icon: img,
            title: 'Forward',
            onClick: noop,
          },
        ]}
        footer={[<div>Test</div>, <div>Oh</div>]}
        resizable
      />
    ),
  notes: 'WIP'
}
export const AlertWindowStory = {
  render: () => (
    <AlertWindow
      title="AlertWindow"
      icon={img}
      onClose={noop}
      onOK={noop}
      onCancel={noop}
    >
      This is an error message.
    </AlertWindow>
  )
}
export const WindowActionStory = () => (
    <WindowAction
      icon={img}
      action="save"
      onClose={noop}
      onOK={noop}
      onCancel={noop}
      content={[{ title: 'Blah', icon: img }, { title: 'Blah2', icon: img }]}
    />
  );

const meta = {
  component: GenericWindow,
}
export default meta;