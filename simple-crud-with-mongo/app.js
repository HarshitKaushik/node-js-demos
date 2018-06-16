// We require both the express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Initialise our express app
const app = express();

// Routes for the product model related REST APIs
const productRouteConfig = require('./route/product.route');

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://adminuser:adminuser123@ds161710.mlab.com:61710/crudmongoappdb';
mongoose.connect(dev_db_url, () => console.log('The database is connected'));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// if we pass the route before the bodyParser code, it does not work for POST method body
app.use('/products', productRouteConfig);

const port = 3000;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
