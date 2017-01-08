const http = require('http');

var chat = require('../src/chat/server');

chat.listen(62226);

console.log('\nChat is running on port 62226...');