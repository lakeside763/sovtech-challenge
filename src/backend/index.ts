import { app, port, server } from './server';


const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}`));
}

startApolloServer();