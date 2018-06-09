const hapi = require('hapi');
const mongoose = require('mongoose');
const painting = require('./models/painting');
const {graphqlHapi, graphiqlHapi} = require('apollo-server-hapi');
const schema = require('./graphql/schema');

// swagger
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');
const pack = require('./package');


const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async() => {
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      },
      route: {
        cors: true
      }
    }
  });

  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema
      },
      route: {
        cors: true
      }
    }
  });

  await server.register([
    inert,
    vision,
    {
      plugin: hapiSwagger,
      options: {
        title: 'Paintings API documentation',
        version: pack.version
      }
    }
  ]);

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
    },
    config: {
      description: 'Get All The Descriptions',
      tags: ['v1', 'api', 'version']
    }
  },{
    method: 'POST',
    path: '/api/v1/paintings',
    handler: (request, reply) => {
      const {name, url, technique} = request.payload;
      const paintingObj = new painting({
        name,
        url,
        technique
      });
      return paintingObj.save();
    },
    config: {
      description: 'Post a new description',
      tags: ['v1', 'api', 'version']
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