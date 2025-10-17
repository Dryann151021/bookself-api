const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.start();
  server.route(routes);
  console.log(`Server sedang berjalan di ${server.info.uri}...`);
};

init();
