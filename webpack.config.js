var path = require('path');

var srcPath = path.join(__dirname, '/view/frontend/web/js/vue/script.js'),
	distPath = path.join(__dirname, '/view/frontend/web/js/dist');

module.exports = {
	entry: srcPath,
	output: {
		path: distPath,
		filename: 'index.js',
		libraryTarget: 'amd',
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
		extensions: ['*', '.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					"presets": [
						[
							"@babel/preset-env",
							{
								"useBuiltIns": "entry"
							}
						]
					]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'js': 'babel-loader'
					}
				}
			}
		]
	}
}
