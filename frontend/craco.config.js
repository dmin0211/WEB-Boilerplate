const path = require('path');

module.exports = function() {
    return {
        webpack: {
            alias: {
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@api': path.resolve(__dirname, 'src/api'),
                '@component': path.resolve(__dirname, 'src/component')
            }
        }
    }
};