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
  require('../stories/taskbar.js');
  require('../stories/buttons.js');
  require('../stories/windows.js');
  require('../stories/icons.js');
  require('../stories/scrollbar.js');
  require('../stories/inputs.js');
  require('../stories/start.js');
}

configure(loadStories, module);
