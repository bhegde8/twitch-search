#!/usr/bin/env node

/**
 * Module dependencies.
 */
const debug = require('debug')('twitch-search-backend:server');
const http = require('http');

const app = require('../server/app');

/**
 * Load environment variables from .env
 */
require('dotenv').config();

/**
 * Get the port from the environment and set it for Express.
 */
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on the provided port, on all network interfaces.
 */
server.listen(port);

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

/**
 * Event listener for HTTP server "listening" event.
 */
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});