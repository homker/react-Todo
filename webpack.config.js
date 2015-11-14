/**
 * Created by homker on 15/10/23.
 */

var webpack = require('webpack');
module.exports = {
    cache: true,
    entry: './src/components/main.jsx',
    output: {
        filename: 'entry.js',
        path: __dirname + '/dist/'
    },
    module: {
        loaders: [
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}

        ]
    },
    resolve: {
        extension: ['', '.js', '.jsx']
    }
};