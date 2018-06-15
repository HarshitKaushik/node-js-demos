//server4.js
// Express - a NodeJs framework for easily building web apps and APIs.
const express = require('express'),
  server = express();

// After importing the express module, we called it as a function.This begins our server journey.
// Next, we try to set the port with server.set().process.env.PORT gets the environment port the app
// is running on and somehow, if it’s not available, we default it to 3000
server.set('port', process.env.PORT || 3000);

// A route in express looks like below
// server.VERB('route', callback);
// VERB is any REST method like GET, POST, PUT, etc.
// route is the pathname that is appended to the domain name
// callback is a javascript callback function which is invoked 
// when this route is hit.

//Basic routes
server.get('/', (request, response) => {
  response.send('Home page');
});

server.get('/about', (request, response) => {
  response.send('About page');
});

// Express error handling middleware
// Middlewares are functions that do some http heavy lifting for us. In the code above, the middleware is an error handling one.
server.use((request, response) => {
  response.type('text/plain');
  response.status(505);
  response.send('Error page');
});

//Binding to a port
server.listen(3000, () => {
  console.log('Express server started at port 3000');
});