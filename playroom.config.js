module.exports = {
  components: './playroom',
  outputPath: './dist/playroom',

  // Optional:
  title: 'My Awesome Library',
  // themes: './src/themes',
  frameComponent: './playroom/FrameComponent.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Theme>
      <WindowAlert
          icon="https://via.placeholder.com/32"
          title="Welcome to playroom"
          onClose={() => {}}
          onHelp={() => {}}
          onOK={() => {}}
          onCancel={() => {}}
        >
          This is the Playroom environment
        </WindowAlert>
        <TaskBar
          quickLaunch={[
            { title: 'ProgramOne', icon: "https://via.placeholder.com/32" },
          ]}
          openWindows={[
            { title: 'ProgramOne', icon: "https://via.placeholder.com/32" },
            { title: 'ProgramTwo', icon: "https://via.placeholder.com/32" },
          ]}
          notifiers={[{ icon: "https://via.placeholder.com/32" }]}
        />
    </Theme>
  `,
  webpackConfig: () => ({
    // Custom webpack config goes here...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
        {
          test: /\.(svg|gif|jpg|png|woff|woff2)$/,
          use: [
            'file-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { modules: false }],
                  '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            },
          ],
        },
      ],
    },
  }),
};
