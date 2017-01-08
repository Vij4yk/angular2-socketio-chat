var  load = require('little-loader');

load("http://localhost:62226/client.bundle.js", (err) => {
  if (err)
    console.log('Loading chat client bundle client ended with error', err);
  else
    console.log('Loading chat client bundle ended successfully');
});