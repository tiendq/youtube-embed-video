let path = require('path');

module.exports = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  entry: './src/youtube.js',
  output: {
    filename: 'youtube.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'YoutubeEmbedVideo',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'prop-types': 'prop-types',
    'react': 'react',
    'react-dom': 'react-dom'
  },
  devtool: 'source-map'
};
