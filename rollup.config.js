import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import browsersync from 'rollup-plugin-browsersync';
import del from 'rollup-plugin-delete';

const watch = process.env.ROLLUP_WATCH;


const plugins = [
  del({ targets: 'dist' }),
  resolve({
    browser: true,
  }),
  commonjs({
    include: ['node_modules/**', 'src/**/*']
  }),
  babel({ babelHelpers: 'bundled' }),
];

if (watch) {
  plugins.push(html())
  plugins.push(browsersync({ server: 'dist' }))
}

export default {
  input: {
    index: './src/index.js',
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
