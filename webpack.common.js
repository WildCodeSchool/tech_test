const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
	app: './src/index.js'
    },
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].bundle.js',
	publicPath: '/'
    },
    module: {
	loaders: [
	    { test: /\.js$/, loader: 'react-hot-loader', exclude: /node_modules/, include: path.resolve('src') },
	    { test: /\.jsx$/, loader: 'react-hot-loader', exclude: /node_modules/, include: path.resolve('src') },
	    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, include: path.resolve('src') },
	    { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, include: path.resolve('src') }
	]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: 'src/index.html'
	})
    ]
};
