import webpack from 'webpack';
import { join } from 'path';

export default {
  entry: './src/shake/browser.js',
  output: {
    path: join(__dirname, '..', 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}