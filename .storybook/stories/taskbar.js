import React from 'react';
import { storiesOf } from '@storybook/react';
import Notifications from '../../src/components/TaskBar/Notifications';
import TaskBar from '../../src/components/TaskBar';
import img from './directory_closed.png';

const optionsSample = [
  {
    onClick: noop,
    title: 'Windows Update',
    icon: img,
  },
  [
    {
      onClick: noop,
      title: 'Programs',
      icon: img,
      options: [
        {
          onClick: noop,
          title: 'Accessories',
          icon: img,
          options: [
            {
              onClick: noop,
              title: 'Notepad?',
              icon: img,
            },
            {
              onClick: noop,
              title: 'fly it',
              icon: img,
            },
            {
              onClick: noop,
              title: 'Minesweeper',
              icon: img,
            },
          ],
        },
        {
          onClick: noop,
          title: 'open file?',
          icon: img,
        },
      ]
    },
    {
      onClick: noop,
      title: 'Control Panel',
      icon: img,
    }
  ],
  {
    onClick: noop,
    title: 'Shut Down',
    icon: img,
  },
];

const noop = () => {
  console.log('run')
};

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
      options={optionsSample}
    />
  ))
  .add('Notifications', () => (
    <Notifications
    />
  ));
