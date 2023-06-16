const main = {
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  stories: [
    // './stories/taskbar.js',
    './stories/buttons.stories.jsx',
    // './stories/windows.js',
    // './stories/contextMenu.js',
    // './stories/icons.js',
    // './stories/scrollbar.js',
    // './stories/inputs.js',
    // './stories/start.js',
    // './stories/desktop.js',
  ],
  core: {
    builder: {
      name: '@storybook/builder-vite', // 👈 The builder enabled here.
      options: {
        loader: {
          '.js': 'jsx',
        },
      },
    }
  },
}

export default main