import { GraphQLServer } from 'graphql-yoga';
import { resolve } from 'path';
import resolvers from './resolvers/resolvers';

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema/schema.graphql'),
  resolvers,
});

server.start();
