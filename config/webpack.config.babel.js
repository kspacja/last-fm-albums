import path from 'path';

// plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DIST_PATH = path.resolve(__dirname, '../dist');
const SRC_PATH = path.resolve(__dirname, '../src');

export default {
  mode: 'development',
  entry: path.join(SRC_PATH, 'index.js'),
  output: {
    filename: 'main.js',
    path: DIST_PATH
  },
  devServer: {
    contentBase: DIST_PATH,
    stats: 'minimal'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'templates', 'index.html')
    })
  ]
};
