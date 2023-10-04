const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackCopy = require('copy-webpack-plugin')

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: "./public/assets/favicon.svg",
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    new WebpackCopy({
        patterns: [
          { from: "./public/assets", to: "assets/" },
          { from: "./public/UI", to: "UI/" },
          { from: "./public/UX", to: "UX/" },
        ],
    }),
]

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode,

    plugins,

    entry: './src/index.js',

    devtool: 'source-map',

    devServer: {
        hot: true,
        /* historyApiFallback: true, */
    },

    module: {
        rules: [

            { 
                test: /\.(html)$/, 
                use: ['html-loader'] 
            },

            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
            }, 

            { 
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                    type: mode === 'production' ? 'asset/resource' : 'asset/resource',
            },

            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            { test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },

        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        /* assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        }, */
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        /* publicPath: '/' */
    },
}