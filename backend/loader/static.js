const express = require("express");
const path = require("path");

function staticLoader(app) {
    app.use(express.static(path.join(__dirname, '../public')));
    return app;
}

module.exports = staticLoader;