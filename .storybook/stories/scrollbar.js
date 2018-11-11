import React from 'react';
import { storiesOf } from '@storybook/react';


storiesOf('Scrollbar', module)
  .add('scrollbar', () => (
    <div style={{ overflow: 'scroll', maxHeight: '200px', maxWidth: '200px' }}>
      <div
        style={{
          width: '400px',
          height: '400px',
          position: 'relative',
          backgroundImage: 'url(https://i2-prod.birminghammail.co.uk/news/midlands-news/article8685215.ece/ALTERNATES/s615b/WA703795.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ float: 'right' }}>sdfsadf</div>
        <div style={{ position: 'absolute', bottom: '0px' }}>sdfsadf</div>
      </div>
    </div>
  ), { notes: 'Scrollbar only works correctly on Chrome at the moment' });
