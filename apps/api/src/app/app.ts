import fastify from 'fastify';

// import { environment } from '../environments/environment';
import { appRoutes } from './routes';

export default async function buildApp() {
  const app = await fastify();

  app.register(appRoutes);

  app.get('/', (_, reply) => {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.send({
      message: 'Welcome!',
      time: new Date().getTime(),
    });
    // reply.header("Access-Control-Allow-Methods", "POST");
  })

  return app;
}
