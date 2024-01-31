import React from 'react';
import ContextMenu from '../../src/components/StandardMenu';
import withMenuWrapper from '../../src/components/StandardMenuHOC';
//import ContextMenuWrapper from '../../src/components/ContextMenu/ContextMenuWrapper';

const noop = () => {};

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
      ],
    },
  ],
  {
    onClick: noop,
    title: 'quit',
  },
];

const MenuWithLogic = withMenuWrapper();

const notes =
  'Hover styling currently controlled by javascript (no styling on CSS only version)';

export const SingleField = {
  render: () => (
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
  ),
}

export const WithChildren = {
  render:
    () => (
      <div>
        <p>Children display handled via CSS :hover</p>
        <ContextMenu className="css" options={optionsSample} />
        <p>Children display handled via JavaScript wrapper component</p>
        <MenuWithLogic options={optionsSample} isActive />
      </div>
    ),
}

const meta = {
  component: SingleField,
}
export default meta;