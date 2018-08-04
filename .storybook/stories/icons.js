import React from 'react';
import { storiesOf } from '@storybook/react';
import ExplorerIcon from '../../src/components/Icon/ExplorerIcon';
import ListIcon from '../../src/components/Icon/ListIcon';
import img from './directory_closed.png';

const noop = () => {
  console.log('run')
};

const alertIt = () => {
  window.alert('DoubleClick');
};

storiesOf('Icons', module)
  .add('ExplorerIcon', () => (
    <ExplorerIcon
      className="test"
      onDoubleClick={ alertIt }
      alt="Testing this testing some more"
      icon={ img }
      title="Testing this testing some more"
    />
  ))
  .add('ListIcon', () => (
    <div>
      <ListIcon
        className="test"
        onClick={ () => noop() }
        onDoubleClick={ alertIt }
        alt="Testing this testing some more"
        icon={ img }
        title="Testing this testing some more"
      />
      <ListIcon
        className="test"
        onClick={ noop }
        onDoubleClick={ alertIt }
        alt="Testing entry 2"
        icon={ img }
        title="Testing entry 2"
      />
      <ListIcon
        className="test"
        onClick={ noop }
        onDoubleClick={ alertIt }
        alt="Testing again"
        icon={ img }
        title="Testing this test"
      />
    </div>
  ));
