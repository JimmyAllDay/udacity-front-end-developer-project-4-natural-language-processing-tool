const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

// --------------Note--------------------------------
// Some settings in this file are taken from: https://itnext.io/auto-reload-a-full-stack-javascript-project-using-nodemon-and-webpack-dev-server-together-a636b271c4e
// This was to set up a dev server to run with Nodemon

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  stats: 'verbose',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js' // relative to the outputPath (defaults to / or root of the site)
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'), // serve your static files from here
    watchContentBase: true, // initiate a page refresh if static content changes
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth'], // can have multiple
        target: 'http://localhost:8080', // server and port to redirect to
        secure: false
      }
    ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: false, // defaults to false
      errors: false // defaults to false
    }
  },
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    })
  ]
};
