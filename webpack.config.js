module.exports = {
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: "eslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules/
    }]
  },
  entry: {
    youtube: "./src/youtube.js"
  },
  output: {
    filename: "[name].js",
    path: "./dist",
    library: "youtube",
    libraryTarget: "commonjs"
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  devtool: "source-map"
};
