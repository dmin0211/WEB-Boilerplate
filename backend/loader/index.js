const basicLoader = require('./basic');
const staticLoader = require('./static');
const {pipe} = require("../../utils/pipe");

function Loader(app) {
    pipe(basicLoader, staticLoader)(app);
}

module.exports = Loader;