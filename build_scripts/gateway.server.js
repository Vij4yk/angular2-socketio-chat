const http = require('http');

var gatewayApp = require('../src/gateway/server');

var server = http.createServer(gatewayApp);
server.listen(8080);

console.log('\nGateway is running on port 8080...');