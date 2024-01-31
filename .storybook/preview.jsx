

import React from 'react';
import Theme from '../src/components/Theme';

export const decorators = [
  (Story) => (
      <Theme
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#008080',
          padding: '4px',
          minHeight: '200px'
        }}
      >
        <Story />
      </Theme>
  )
]