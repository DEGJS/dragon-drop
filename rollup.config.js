const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

export default {
  input: 'index.js',
  output: {
    file: 'dist/dragon-drop.js',
    format: 'umd',
    name: 'DragonDrop'
  },
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      browser: true
    }),
    commonjs(),
    babel()
  ]
};
