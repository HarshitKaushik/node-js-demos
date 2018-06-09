const graphql = require('graphql');
const PaintingType = require('./paintingType');
const painting = require('./../models/painting');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    painting: {
      type: PaintingType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        // logic for serving data
        return painting.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});