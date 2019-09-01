import path from 'path';
import { SRC_PATH } from './consts';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default [
  new HtmlWebpackPlugin({
    template: path.join(SRC_PATH, 'templates', 'index.html'),
  }),
];
