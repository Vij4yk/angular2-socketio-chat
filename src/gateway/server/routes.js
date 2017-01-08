const path = require('path');

exports.chat = function(req, res) {
    const p = path.join(__dirname, '../client/index.html');
    console.log('Serving file: ' + p);
    res.sendFile(p);
}