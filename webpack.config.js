var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        app: ['webpack/hot/dev-server', './src/index.js']
    },
    output: {
        path: './dist/',
        filename: 'browser-bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    }
};
