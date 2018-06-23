import React from 'react';
import { storiesOf } from '@storybook/react';
import Notifications from '../src/TaskBar/Notifications';
import TaskBar from '../src/TaskBar/TaskBar';
import ListMenu from '../src/ListMenu/ListMenu';
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
  ))
  .add('scrollbar', () => (
    <div style={{ overflow: 'scroll', maxHeight: '200px', maxWidth: '200px' }}>
      <div style={{ width: '400px', height: '400px', position: 'relative' }}>
        <div style={{ float: 'right' }}>sdfsadf</div>
        <div style={{ position: 'absolute', bottom: '0px' }}>sdfsadf</div>
      </div>
    </div>
  ))
  .add('ListMenu', () => (
    <ListMenu
      options={
        [
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
                  title: 'New',
                  options: [
                    {
                      onClick: noop,
                      title: 'open file?',
                    },
                    {
                      onClick: noop,
                      title: 'New',
                    },
                  ],
                },
              ]
            },
          ],
          {
            onClick: noop,
            title: 'Close',
          },
        ]
      }
    />
  ));
