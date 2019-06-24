/**
 * Main application routes
 */

const helloWorld = require('./api/helloWorld/index.routes');

module.exports = (app) => {
  // Get Hola mundo
  app.use('/api/helloworld', helloWorld);
};
