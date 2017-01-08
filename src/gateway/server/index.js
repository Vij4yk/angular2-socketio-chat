const express = require('express');
const routes = require('./routes');

import webpack from 'webpack'
import config from '../../../webpack.config'
import webpackMW from 'webpack-dev-middleware'

var gatewayApp = express();
const compiler = webpack(config);

gatewayApp.use(webpackMW(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
gatewayApp.get('/chat', routes.chat);

module.exports = gatewayApp;