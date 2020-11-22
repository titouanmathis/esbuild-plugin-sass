const path = require('path');
const entry = require('webpack-glob-entry');
const sassPlugin = require('../src/index.js');

const entries = entry((filePath) => filePath, 'demo/src/css/[!_]*.scss', 'demo/src/js/*.js');

module.exports = {
  entryPoints: Object.values(entries),
  bundle: true,
  sourcemap: true,
  color: true,
  target: 'es6',
  outdir: path.join('demo/dist'),
  plugins: [sassPlugin()],
};
