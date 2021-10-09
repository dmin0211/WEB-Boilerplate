const express = require('express');
const Loader = require('./loader');

const app = express();

Loader(app);

module.exports = app;
