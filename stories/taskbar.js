import React from 'react';
import { storiesOf } from '@storybook/react';
import Notifications from '../src/TaskBar/Notifications';
import TaskBar from '../src/TaskBar/TaskBar';
import img from '../src/Icon/images/directory_closed.png';

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
    />
  ))
  .add('Notifications', () => (
    <Notifications
    />
  ));
