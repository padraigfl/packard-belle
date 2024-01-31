const main = {
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  stories: [
    './stories/taskbar.stories.jsx',
    './stories/buttons.stories.jsx',
    './stories/windows.stories.jsx',
    './stories/contextMenu.stories.jsx',
    './stories/icons.stories.jsx',
    './stories/scrollbar.stories.jsx',
    './stories/inputs.stories.jsx',
    './stories/start.stories.jsx',
    './stories/desktop.stories.jsx',
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