/**
 * Created by homker on 15/10/23.
 */

var webpack = require('webpack');

module.exports = {
    entry: './components/main.js',
    output: {
        filename: 'entry.js',
        path: __dirname + '/dist/'
    },
    module: {
        loaders: [
            {test: '/\.js$/',exclude:'./node_modules/' ,loader: 'babel-loader'},
            {test: '/\.jsx$/', loader: 'babel-loader!jsx-loader?harmony'},
            {test: '/\.css$/', loader: 'style-loader!css-loader'},
        ]
    },
    resolve: {
        extension: ['', '.js', '.jsx']
    }
};