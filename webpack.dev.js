process.env.NODE_ENV = 'development';
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 5500,
    }
});
