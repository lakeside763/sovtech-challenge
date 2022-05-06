import { app, port } from './server';

app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}`));