import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		// setting up bundle splitting
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// generate an external css file with a has in the filename
		// new ExtractTextPlugin('[name].[contenthash].css'),
		// has the files using MD5 so that the name changes
		new WebpackMd5Hash(),
		// use commonschunkplugin to create a separate bundle
		// of vendor libraries so they are cached separately
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// dynamically genereated html
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true
		}),
		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),
		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			// {test: /\.css$/, loaders: ExtractTextPlugin.extract('css?sourceMap')}
			{test: /\.css$/, loaders: ['style', 'css']}
		]
	}
}