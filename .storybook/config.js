import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import Theme from '../src/components/Theme';

addDecorator(story => (
  <Theme style={{ height: '100vh', display: 'inline-block' }}>
      {story()}
  </Theme>
));

addDecorator(
  withOptions({
    name: 'PackardBelle',
    theme: {
      mainBackground: '#bbc3c4',
      mainBorder: '2px solid rgba(0,0,0,0)',
      mainTextFace: "monospace",
      barFill: 'linear-gradient(to right, #0000a2, #126fc2)',
      barTextColor: 'white',
    },
  }),
);

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
