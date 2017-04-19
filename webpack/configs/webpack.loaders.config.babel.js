import webpack from 'webpack';
import { join } from 'path';

export default {
  entry: './src/loaders/component.js',
  output: {
    path: join(__dirname, '..', 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          /* To enable modules and check the difference in the bundle, add a slash after ->*
          modules: true,
          localIdentName: '[local]--[hash:base64:8]'
          /**/
        }
      },
      /* Have a crack at adding the Sass-, or Less-, loader here.
      ]
    }]
  }
}