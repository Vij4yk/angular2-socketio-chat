const express   =   require('express');
const http      =   require('http');
const path      =   require('path');
const routes    =   require('./routes');

import webpack from 'webpack'
import config from '../../../webpack.config'
import webpackMW from 'webpack-dev-middleware'
import socket from './socket'

var app         =   express();
var server      =   http.createServer(app);

const compiler  =   webpack(config);
const io        =   socket(server);

app.use(webpackMW(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

// serve static files
app.use(express.static(path.join(__dirname + '/../public')));
app.get('/', routes.client);

module.exports = server;