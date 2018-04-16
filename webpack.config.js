module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /node_modules/
    }]
  },
  entry: './src/youtube.js',
  output: {
    filename: "youtube.js",
    path: "./dist",
    library: "YoutubeEmbedVideo",
    libraryTarget: "commonjs2"
  },
  externals: {
    "prop-types": "prop-types",
    "react": "react",
    "react-dom": "react-dom"
  },
  devtool: "source-map"
};
