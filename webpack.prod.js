process.env.NODE_ENV = 'production';
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [...common.plugins, new MiniCssExtractPlugin({
        linkType: false,
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
    })],
});
