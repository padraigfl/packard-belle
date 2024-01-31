import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';

import Theme from '../src/components/Theme';

addDecorator(story => (
  <div style={{ background: '#666666', padding: '4px' }}>
    <Theme
      style={{
        height: '100vh',
        display: 'inline-block',
        backgroundColor: '#008080',
      }}
    >
      {story()}
    </Theme>
  </div>
));

addDecorator(
  withOptions({
    name: 'Packard-Belle',
    url: 'https://github.com/padraigfl/packard-belle?selector',
    theme: {
      mainBackground: '#bbc3c4',
      mainBorder: '2px solid rgba(0,0,0,0)',
      mainTextFace: 'monospace',
      barFill: 'linear-gradient(to right, #0000a2, #126fc2)',
      barTextColor: 'white',
    },
  })
);

addDecorator(withNotes);

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
