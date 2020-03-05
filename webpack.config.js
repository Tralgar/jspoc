const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader:['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'public' },
    ]),
    new Dotenv({
      path: `./.my.env`,
    }),
  ],
  devtool: 'inline-source-map',
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  //   runtimeChunk: {
  //     name: entrypoint => `runtime_${entrypoint.name}`,
  //   },
  // },
  devServer: {
    publicPath: '/dist',
    contentBase: __dirname + '/dist',
    hot: true,
  }
};
