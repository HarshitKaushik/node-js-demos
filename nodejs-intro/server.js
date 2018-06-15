//server.js
// we require or import the http module which is a npm module that provides http functionality
const http = require('http'),
  server = http.createServer();

// Here we are attaching a callback to a request event of the server 
server.on('request', (request, response) => {
  // writes the header of the response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // writes the response to be displayed on the web page
  response.write('Hello world');
  // ends the response
  response.end();
});

// Here we attach a callback to the listen method of server. It is executed as soon as the server is up and running.
server.listen(3000, () => {
  console.log('Node server created at port 3000');
});