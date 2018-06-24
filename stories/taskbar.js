import React from 'react';
import { storiesOf } from '@storybook/react';
import Notifications from '../src/TaskBar/Notifications';
import TaskBar from '../src/TaskBar/TaskBar';
import ListMenu from '../src/ListMenu/ListMenu';
import ListMenuSimple from '../src/ListMenu/ListMenuSimple';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {
  console.log('run')
};

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


storiesOf('TaskBar', module)
  .add('TaskBar', () => (
    <TaskBar
      quickLaunch={[
        {
          alt: 'Quick1',
          onClick: noop,
          icon: img,
        },
      ]}
      openWindows={[
        {
          title: 'Program1',
          onClick: noop,
          icon: img,
        },
        {
          title: 'Program2',
          onClick: noop,
          icon: img,
        },
        {
          title: 'Program3',
          onClick: noop,
          icon: img,
          isActive: true,
        },
      ]}
    />
  ))
  .add('Notifications', () => (
    <Notifications
    />
  ))
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
  ));
