module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: "./dist",
    publicPath: "/dist"
  },
  resolve: {
    fallback: "/usr/local/lib/node_modules"
  }
};
