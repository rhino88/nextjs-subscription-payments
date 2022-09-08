import { createServer } from '@graphql-yoga/node';
import gql from 'graphql-tag';
import { Resolvers } from 'types/gql-resolvers';
import typeDefs from '../../lib/schema';

const resolvers: Resolvers = {
  Query: {}
};

const server = createServer({
  schema: {
    typeDefs: gql(typeDefs),
    resolvers
  },
  endpoint: '/api/graphql',
  graphiql: process.env.VERCEL_ENV === 'production' ? false : true
});

export default server;
