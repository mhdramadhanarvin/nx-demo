import buildApp from './app/app';

(async () => {
  const app = await buildApp();

  app.listen(
    { port: 3333, host: "0.0.0.0" },
    (err) => {
      if (err) {
        app.log.error(err);
        process.exit(0);
      }
    }
  );
})();
