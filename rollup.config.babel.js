import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: './src/index.js',
  moduleName: 'PackardBelle',
  sourcemap: true,

  targets: [
    {
      dest: './build/pb.js',
      format: 'umd',
    },
    {
      dest: 'build/pb.module.js',
      format: 'es',
    },
  ],

  plugins: [
    postcss(
      // {
      //   modules: true,
      // }
    ),
    resolve({
      extensions: [ '.mjs', '.js', '.json', '.node', '.ttf'],
    }),
    autoExternal(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs(),
  ],

  external: ['react', 'react-dom'],

  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    clone: 'clone',
    'prop-types': 'PropTypes',
    classnames: 'classnames',
    'react-select': 'ReactSelect',
  },
};
