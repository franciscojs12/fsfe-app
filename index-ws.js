// WEBSOCKETS SERVER
const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

server.on('request', app);

server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
