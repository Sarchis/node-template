/**
 * Express Configuration
 */

// const expres = require('expres');
const morgan = require('morgan');

module.exports = (app) => {
  app.use(morgan('dev'));
};
