import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import { resolve } from 'path';
import resolvers from './resolvers/resolvers';

mongoose.connect('mongodb://localhost:27017/phone-book-graphql', {
  useNewUrlParser: true,
});

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema/schema.graphql'),
  resolvers,
});

server.start(() => console.log('Server is running on localhost:4000'));
