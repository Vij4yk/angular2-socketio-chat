const path = require('path');

exports.client = function(request, response) {
    const p = path.join(__dirname, '/../client/index.html');
    console.log('Serving file: ' + p);
    response.sendFile(p);
}

