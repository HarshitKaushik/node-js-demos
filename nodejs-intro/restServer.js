const express = require('express'),
  server = express(),
  // We include the users data that we have exported in the users.js file 
  // and we will send this data using a REST API written in a nodeJS server.
  users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/', (request, response) => {
  // Express has some methods that help us send certain content to the browser.response.sendFile() 
  // searches for a file and sends it to the browser.Here, we use a __dirname to get the root folder
  //  where our server is running from, then we add + 'index.js' to make sure we target the right file.
  response.sendFile(__dirname + '/index.html');
});

server.get('/users', (request, response) => {
  // The response.json() sends json content to requesting websites. 
  // We pass it an argument, users array which is what we’re actually sharing.
  response.json(users);
});

//Binding to localhost://3000
server.listen(3000, () => {
  console.log('Express server started at port 3000');
});
