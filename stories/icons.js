import React from 'react';
import { storiesOf } from '@storybook/react';
import ExplorerIcon from '../src/Icon/ExplorerIcon';
import ListIcon from '../src/Icon/ListIcon';
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
  ))
  .add('ListIcon', () => (
    <div>
      <ListIcon
        className="test"
        onClick={ noop }
        alt="Testing this testing some more"
        src={ img }
        title="Testing this testing some more"
      />
      <ListIcon
        className="test"
        onClick={ noop }
        alt="Testing entry 2"
        src={ img }
        title="Testing entry 2"
      />
      <ListIcon
        className="test"
        onClick={ noop }
        alt="Testing again"
        src={ img }
        title="Testing this test"
      />
    </div>
  ));
