import React from 'react';
import StartMenu from '../../src/components/StartMenu';

import img from './directory_closed.png';

const noop = () => {};

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
      options: [],
    }
  ],
  {
    onClick: noop,
    title: 'Shut Down',
    icon: img,
  },
];

const Start = {
  render: () => (
    <div style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
      <StartMenu
        options={optionsSample}
      />
    </div>
  )
};

const meta = {
  component: Start,
}
export default meta;