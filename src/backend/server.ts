import compression from 'compression';
import helmet from 'helmet';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express';
import { RedisCache } from 'apollo-server-cache-redis';
import config from './config';
import { typeDefs, resolvers } from './schema';


// const cache = new RedisCache(config.redis);
export const app = express();
export const { port } = config;

console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());


// const server = new ApolloServer({
//   schema: makeExecutableSchema({
//     typeDefs,
//     resolvers,
//   }),
//   cache,
// });

// server.applyMiddleware({ app });


