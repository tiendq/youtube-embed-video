let path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist"
  },
  resolve: {
    modules: [
     "node_modules"
   ]
  }
};
