// server3.js
const http = require('http'),
// we require the url module to work on urls
  url = require('url'),

  makeServer = function (request, response) {
    let path = url.parse(request.url).pathname;
    console.log(path);
    // A manual way to do routing in a node server using http
    // Just to get an idea of how things kind of work in a NodeJS server
    if (path === '/') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('Hello world');
    }
    else if (path === '/about') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('About page');
    }
    else if (path === '/blog') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('Blog page');
    }
    else {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('Error page');
    }
    response.end();
  },
  server = http.createServer(makeServer);
server.listen(3000, () => {
  console.log('Node server created at port 3000');
});