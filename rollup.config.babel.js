import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',
  moduleName: 'PackardBelle',
  sourcemap: true,

  // output: {
  //   file: './build/rrpm.js',
  //   format: 'umd',
  //   name: 'ReactRectanglePopupMenu',
  //   sourcemap: true
  // },

  targets: [
    {
      dest: './build/pb.js',
      format: 'umd'
    },
    {
      dest: 'build/pb.module.js',
      format: 'es'
    }
  ],

  plugins: [
    postcss({
      modules: true
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    commonjs()
  ],

  external: ['react', 'react-dom'],

  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
