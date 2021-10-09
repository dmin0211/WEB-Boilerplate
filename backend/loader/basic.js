const logger = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");

function basicLoader(app) {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());

    return app;
}

module.exports = basicLoader;