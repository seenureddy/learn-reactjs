const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebpackRootPlugin  = require('html-webpack-root-plugin');

/**
 * Get configuration for Webpack
 *
 * https://github.com/petehunt/webpack-howto
 */
var port = process.env.webpackDevPort || 3000;


module.exports = {
  mode: 'development',
  entry: './src/index_loops-01.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'), // change this
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: "localhost",
    port: port,
    contentBase: './build',
  },
  module: {
    rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [{loader: "babel-loader", options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]}}, {loader: "eslint-loader"},
        ]},
        { test: /\.css$/, use: 'css-loader' },
        {
            test: /\.scss$/, use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        { test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader?name=./Scripts/dist/[name].[ext]' },
//        { test: /\.html$/, loaders: "file?name=[name].[ext]", },
      ],
   },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({title: 'Development', template: path.resolve('./index.html'),}),
//    new HtmlWebpackRootPlugin(),

  ],
};
