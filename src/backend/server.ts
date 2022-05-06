import compression from 'compression';
import helmet from 'helmet';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema'
import { RedisCache } from 'apollo-server-cache-redis';
import config from './config';
import { typeDefs, resolvers } from './schema';
import datasources from './datasources';
import { GraphQLError } from 'graphql';


const cache = new RedisCache(config.redis);
export const app = express();
export const { port } = config;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());

export const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  cache,
  formatError: (err: GraphQLError) => {
    return {
      ...err,
      message: err.message,
      locations: err.locations,
      path: err.path,
      extensions: err.extensions.code
    }
  },
  dataSources: () => ({
    swapi: new datasources.swapi(),
  })
});






