const hapi = require('hapi');
const mongoose = require('mongoose');
const painting = require('./models/painting');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async() => {
  server.route([{
    method: 'GET',
    path: '/',
    handler: function(request, response) {
      return `My Modern API`;
    }
  },{
    method: 'GET',
    path: '/api/v1/paintings',
    handler: (request, reply) => {
      return painting.find();
    }
  },{
    method: 'POST',
    path: '/api/v1/paintings',
    handler: (request, reply) => {
      const {name, url, techniques} = request.payload;
      const paintingObj = new painting({
        name,
        url,
        techniques
      });
      return painting.save();
    }
  }]);

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();

mongoose.connect('mongodb://harshit:myperks123@ds247430.mlab.com:47430/hkdatabase');

mongoose.connection.once('open', () => {
  console.log('Database is connected.');
});