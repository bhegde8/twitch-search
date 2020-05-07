const express = require('express');

/**
 * Import middleware
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**
 * Load environment variables from .env
 */
require('dotenv').config();

/**
 * Import routers
 */
const twitchRouter = require('./routes/twitch');


const app = express();

/**
 * Configure express middleware
 */
app.use(cors({
    origin: `${process.env.FRONTEND_HOST}:${process.env.FRONTEND_PORT}`,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Set up routers
 */
app.use('/twitch', twitchRouter);


module.exports = app;
