import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
  resolve({
    browser: true,
  }),
  commonjs({
    include: ['node_modules/**', 'src/**/*']
  }),
  babel({ babelHelpers: 'bundled' }),
];

export default {
  input: {
    base: './src/index.js',
    button: './src/plugins/button.js',
    buttonPlain: './src/plugins/button-plain.js',
  },
  output: {
    dir: './dist',
    exports: 'auto',
    // file: './dest/index.js',
    format: 'cjs',
  },
  plugins,
};
