// BASIC HTTP SERVER
const http = require('http');

const PORT = 3000;

http
  .createServer(function (req, res) {
    res.write('HTTP response from the server');
    res.end();
  })
  .listen(PORT);

console.log(`Server started on port ${PORT} `);
