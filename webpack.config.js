const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        index: "./src/index.js",
        about: "./src/about.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index Page',
            filename: "index.[contenthash].html",
            template: path.join(__dirname, 'src/index.html'),
            chunks: ['index'],
            templateParameters: {
                env: devMode ? '(DEV)' : '',
                lang: 'ko-KR'
            },
        }),
        new HtmlWebpackPlugin({
            title: 'About Page',
            filename: "about.[contenthash].html",
            template: path.join(__dirname, 'src/about.html'),
            chunks: ['about'],
            templateParameters: {
                env: devMode ? '(DEV)' : '',
                lang: 'ko-KR'
            },
        }),
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "auto",
        library: {
            name: 'MyLibrary',
            type: 'var',
            export: ['hello'],
        },
        assetModuleFilename: 'images/[name].[contenthash][ext][query]',
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    enforce: true
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            additionalData: '@use [path]'
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[contenthash][ext][query]'
                }
            },
        ]
    }
}