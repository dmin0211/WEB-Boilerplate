const { pipe } = require('../utils/pipe');
const basicLoader = require('./basic');
const staticLoader = require('./static');

function Loader(app) {
  pipe(basicLoader, staticLoader)(app);
}

module.exports = Loader;
