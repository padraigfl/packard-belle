import React from 'react';
import { storiesOf } from '@storybook/react';
import StartMenu from '../src/components/StartMenu/StartMenu';

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


const noop = () => {};

storiesOf('StartMenu', module)
  .add('ListMenuSimple', () => (
    <div style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
      <StartMenu
        options={optionsSample}
      />
    </div>
  ));
