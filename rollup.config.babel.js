import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-img';
import autoExternal from 'rollup-plugin-auto-external';

const moduleOptions = {
  name: 'PackardBelle',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    clone: 'clone',
    'prop-types': 'PropTypes',
    classnames: 'classnames',
    'react-select': 'ReactSelect',
  },
  sourcemap: true,
};

export default {
  input: './src/index.js',

  output: [
    {
      ...moduleOptions,
      file: './build/pb.js',
      format: 'umd',
    },
    {
      ...moduleOptions,
      file: 'build/pb.module.js',
      format: 'es',
    },
  ],

  plugins: [
    image({
      output: './build/images', // default the root
      extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
      limit: 8192, // default 8192(8k)
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [],
      // modules: true,
    }),
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ttf'],
    }),
    autoExternal(),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs(),
  ],

  external: ['react', 'react-dom'],
};
