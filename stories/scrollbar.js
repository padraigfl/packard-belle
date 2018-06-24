import React from 'react';
import { storiesOf } from '@storybook/react';


storiesOf('Scrollbar', module)
  .add('scrollbar', () => (
    <div style={{ overflow: 'scroll', maxHeight: '200px', maxWidth: '200px' }}>
      <div style={{ width: '400px', height: '400px', position: 'relative' }}>
        <div style={{ float: 'right' }}>sdfsadf</div>
        <div style={{ position: 'absolute', bottom: '0px' }}>sdfsadf</div>
      </div>
    </div>
  ));
