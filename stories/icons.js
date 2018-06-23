import React from 'react';
import { storiesOf } from '@storybook/react';
import ExplorerIcon from '../src/Icon/ExplorerIcon';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Icons', module)
  .add('ExplorerIcon', () => (
    <ExplorerIcon
      className="test"
      onClick={ noop }
      alt="Testing this testing some more"
      src={ img }
      title="Testing this testing some more"
    />
  ));
