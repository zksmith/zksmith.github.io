/* global __dirname */

const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/js/App.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [{
      include: path.resolve(__dirname, 'src/js'),
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query:
      {
        presets:['react', ['es2015', {'modules': false, 'loose': true}]]
      }
    }//babel-loader
    ]
  }
};
