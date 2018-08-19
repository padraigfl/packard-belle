import React from 'react';
import { storiesOf } from '@storybook/react';
import ContextMenu from '../../src/components/StandardMenu/StandardMenu';
import withMenuWrapper from '../../src/components/StandardMenu/withMenuWrapper';
//import ContextMenuWrapper from '../../src/components/ContextMenu/ContextMenuWrapper';

const optionsSample = [
  {
    onClick: noop,
    title: 'New',
  },
  {
    onClick: noop,
    title: 'Disabled',
    isDisabled: true,
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

const MenuWithLogic = withMenuWrapper();

storiesOf('ContextMenu', module)
  .add('ContextMenu Single Field', () => (
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
  .add('ContextMenu with children', () => (
    <div>
      <p>
        Children display handled via CSS :hover
      </p>
      <ContextMenu
        className="standard-menu--css"
        options={optionsSample}
      />
      <p>
        Children display handled via JavaScript wrapper component
      </p>
      <MenuWithLogic
        options={optionsSample}
        isActive
      />
    </div>
  ));
