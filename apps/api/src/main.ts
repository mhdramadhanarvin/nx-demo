// import * as express from 'express';
// import { addTodoRoutes } from './app/todos';

// const app = express();

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });
// addTodoRoutes(app);

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

import buildApp from './app/app';
// import { environment } from './environments/environment';

(async () => {
  const app = await buildApp();

  app.listen(
    { port: 3333, host: "localhost" },
    (err) => {
      if (err) {
        app.log.error(err);
        process.exit(0);
      }
    }
  );
})();
