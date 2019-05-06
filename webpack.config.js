const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

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
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "window"
	},
	plugins: [
		new DtsBundlePlugin(),
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				"./*",
				"!./template-blocks.*"
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
			out: 'template-blocks.d.ts',
			removeSource: true,
			outputAsModuleFolder: true // to use npm in-package typings
		});
	});
};