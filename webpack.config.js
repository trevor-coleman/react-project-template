// eslint-disable-next-line no-unused-vars
var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true, // reload on the fly (auto refresh)
        port: 3000 // which port to run the server on
    },
    devtool: "#source-map",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
