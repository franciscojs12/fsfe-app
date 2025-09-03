// BASIC HTTP SERVER
const http = require('http');

const PORT = 3001;

http
  .createServer(function (req, res) {
    res.write('HTTP response from the server (port 3001)');
    res.end();
  })
  .listen(PORT);

console.log(`Server started on port ${PORT} `);
