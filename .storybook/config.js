import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Theme from '../src/Theme';

addDecorator(story => (
  <Theme>
    <div style={{ padding: '8px' }}>
      {story()}
    </div>
  </Theme>
));

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
