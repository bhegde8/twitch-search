const express = require('express');

/**
 * Import middleware
 */
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**
 * Import routers
 */
const twitchRouter = require('./routes/twitch');


const app = express();

/**
 * Configure express middleware
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Set up routers
 */
app.use('/twitch', twitchRouter);


module.exports = app;
