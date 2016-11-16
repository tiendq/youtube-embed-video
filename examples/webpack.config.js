module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules/
    }]
  },
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: "./dist",
    publicPath: "/dist"
  }
};
