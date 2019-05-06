const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: './src/index.ts',
	optimization: {
		minimize: false,
		concatenateModules: true,
		flagIncludedChunks: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					//configFile: "./tsconfig.json"
				}
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: 'template-blocks.js',
		path: __dirname,
		libraryTarget: "window"
	},
	plugins: [
		new DtsBundlePlugin(),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				"./dist/"
			]
		})
	]
};

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
	compiler.plugin('done', function(){
		var dts = require('dts-bundle');

		dts.bundle({
			name: "template-blocks",
			main: 'dist/index.d.ts',
			out: '../template-blocks.d.ts',
			removeSource: true,
			outputAsModuleFolder: true // to use npm in-package typings
		});
	});
};