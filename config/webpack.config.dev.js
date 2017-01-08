import path from 'path';
import webpack from 'webpack'
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: {
    'gateway': path.resolve(__dirname, '../src/gateway/client/main.ts'),
    'client': path.resolve(__dirname, '../src/chat/client/index.js'),
    'polyfills':  path.resolve(__dirname, '../src/polyfills.js'),
    'vendor':  path.resolve(__dirname, '../src/vendor.js')
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.css'],
    alias: {
      'tether':  helpers.root('node_modules', 'mdbootstrap', 'js') + '/tether.min.js', 
    }
  },

  target: 'web',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [    
    new webpack.optimize.CommonsChunkPlugin({
      name: ['client', 'gateway', 'vendor', 'polyfills']
    }),
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    // Force Bootstrap to pick up on Tether
    new webpack.ProvidePlugin({
        tether: 'tether',
        Tether: 'tether',
        'window.Tether': 'tether',
    })
  ],

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude:
         [
          helpers.root('src', 'chat'), 
          helpers.root('src', 'gateway')
          ],
        loader: 'style-loader!css-loader'//ExtractTextPlugin.extract('css?sourceMap')
      },
      {
        test: /\.css$/,
        include: 
          [
          helpers.root('src', 'chat'), 
          helpers.root('src', 'gateway')
          ],
        loader: 'raw'
      }
    ]
  }
}
