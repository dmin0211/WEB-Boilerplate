const express = require('express');
const Loader = require('./loader');
const apiRouter = require('./api');

const app = express();

Loader(app);
app.use('/api', apiRouter);

module.exports = app;
