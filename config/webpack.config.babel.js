import path from 'path';
import { SRC_PATH, DIST_PATH } from './consts';

import plugins from './webpack.plugins';
import loaders from './webpack.loaders';

export default {
  mode: 'development',
  entry: path.join(SRC_PATH, 'index.js'),
  output: {
    filename: 'main.js',
    path: DIST_PATH
  },
  devServer: {
    contentBase: DIST_PATH,
    stats: 'minimal',
    hot: true
  },
  module: {
    rules: loaders
  },
  plugins
};
