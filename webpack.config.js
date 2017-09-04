var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        lib: ['react', 'react-dom'],
        gui: './app/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'nwjs/app'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'nwjs/app'),
        host: '0.0.0.0'
    },
    target: 'node-webkit',
    module: {
        externals: {
            React: 'react',
            ReactDOM: 'react-dom'
        },
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'nwjs')],
           query: {
              plugins: ['transform-object-rest-spread'],
                presets: ['es2015', 'react']
           }
        },
        {
            test: /\.node$/,
            loader: 'node-loader'
        },
        {
            test: /\.svg$/,
            loader: 'svg-url-loader?noquotes'
        },
        {
            test   : /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },{
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_PATH': '"' + (process.env.BASE_PATH || '/') + '"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: 'lib.min.js'
        }),
        new HtmlWebpackPlugin({
            title: 'KittenBlock',
            template: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'scratch-blocks/media',
            to: 'media'
        }])
    ].concat(process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ] : [])
};
