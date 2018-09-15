import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Theme from '../src/components/Theme';

addDecorator(story => (
  <Theme>
    <div style={{ padding: '8px' }}>
      {story()}
    </div>
  </Theme>
));

function loadStories() {
  require('./stories/taskbar.js');
  require('./stories/buttons.js');
  require('./stories/windows.js');
  require('./stories/contextMenu.js');
  require('./stories/icons.js');
  require('./stories/scrollbar.js');
  require('./stories/inputs.js');
  require('./stories/start.js');
  require('./stories/desktop.js');
}

configure(loadStories, module);
