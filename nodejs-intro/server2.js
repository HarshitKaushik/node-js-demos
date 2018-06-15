//server2.js
// Here we use the JS way to create a function, assign it to a variable and use it as a callback in our server.
const http = require('http'),

  makeServer = function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello world');
    response.end();
  },

  // Here we can see that makeServer is a callback to createServer() method of http
  server = http.createServer(makeServer);

// makeServer here is a callback, since functions are first class objects in JavaScript, they can be passed into variables and then other functions.
server.listen(3000, () => {
  console.log('Node server created at port 3000');
});